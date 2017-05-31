import { Reaction } from "/client/api";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { StaticPages } from "/lib/collections";

import "./shop-view.html";

Template.shopView.onCreated(() => {
  Meteor.subscribe("StaticPages");
});

Template.shopView.helpers({
  getUrl() {
    return `${window.location.host}/shop/${Reaction.getShopId()}`;
  },

  loadPages() {
    const pages = StaticPages.find({
      $and: [{
        shopId: Reaction.getShopId(),
        status: "publish"
      }]
    }).fetch();
    return pages;
  }
});
