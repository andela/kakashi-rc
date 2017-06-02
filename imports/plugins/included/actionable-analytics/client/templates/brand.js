/* eslint-disable no-unused-vars  */

import { Template } from "meteor/templating";
import Chart from "chart.js";
import _ from "lodash";

let productData = {};
let vendorDetails = [];
let vendorCounts = [];
let vendorIds = [];
let vendorNames = [];

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)"
];
const borderColor = [
  "rgba(255,99,132,1)",
  "rgba(54, 162, 235, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
];

const storeProductData = (productId) => {
  if (productData[productId]) {
    productData[productId] = productData[productId] + 1;
  } else {
    productData[productId] = 1;
  }
};

const getVendors = (vendorId) => {
  vendorId.forEach((id) => {
    Meteor.call("analytics/getproduct", id, (error, result) => {
      const index = vendorNames.indexOf(result[0].vendor);
      if (index === -1) {
        vendorNames.push(result[0].vendor);
      } else {
        vendorCounts[index] = vendorCounts[index] + vendorCounts[vendorIds.indexOf(id)];
        delete vendorCounts[vendorIds.indexOf(id)];
      }
    });
  });
};

const displayVendors = () => {
  const ctx = document.getElementById("pieChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: vendorNames,
      datasets: [{
        label: "Products Sold",
        data: vendorCounts,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

Template.analyticsMostPatronisedBrand.onRendered(() => {
  productData = {};
  vendorDetails = [];
  vendorCounts = [];
  vendorIds = [];
  vendorNames = [];

  Meteor.call("analytics/getorders", (error, result) => {
    result.forEach((order) => {
      order.items.forEach(item => {
        storeProductData(item.productId);
      });
    });
    Object.keys(productData).forEach(id => {
      vendorDetails.push({
        ID: id,
        count: productData[id]
      });
    });

    productData = _.orderBy(vendorDetails, ["count"], ["desc"]).slice(0, 5);
    productData.forEach(data => {
      vendorIds.push(data.ID);
      vendorCounts.push(data.count);
    });
    getVendors(vendorIds);
    displayVendors();
  });
});
