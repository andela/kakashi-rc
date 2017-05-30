import { Reaction } from "/client/api";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { StaticPage } from "/lib/collections";

import "./staticPageView.html";

Template.staticPageView.onCreated(() => {
  Meteor.subscribe("StaticPage");
});

Template.staticPageView.helpers({
  getUrl() {
    return `${window.location.host}/shop/${Reaction.getShopId()}`;
  },

  loadPages() {
    const page = StaticPage.find({
      $and: [{
        shopId: Reaction.getShopId(),
        status: "publish"
      }]
    }).fetch();
    return page;
  }
});
