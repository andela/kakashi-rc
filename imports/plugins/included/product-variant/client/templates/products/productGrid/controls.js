import { Session } from "meteor/session";
import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";
import { IconButton } from "/imports/plugins/core/ui/client/components";
import * as Collections from "/lib/collections";
import { Reaction } from "/client/api";

Template.gridControls.onCreated(function () {
  this.state = new ReactiveDict();

  this.autorun(() => {
    if (this.data.product) {
      const selectedProducts = Session.get("productGrid/selectedProducts");
      const isSelected = _.isArray(selectedProducts) ? selectedProducts.indexOf(this.data.product._id) >= 0 : false;

      this.state.set("isSelected", isSelected);
    }
  });
});

Template.gridControls.onRendered(function () {
  return this.$("[data-toggle='tooltip']").tooltip({
    position: "top"
  });
});

Template.gridControls.helpers({
  checked: function () {
    return Template.instance().state.equals("isSelected", true);
  },
  isVendorProduct() {
    if (Reaction.hasOwnerAccess() || Reaction.hasAdminAccess()) {
      return true;
    }
    const instance = Template.instance();

    const productId = instance.data.product._id;
    const product = Collections.Products.findOne({
      _id: productId,
      reactionVendorId: Meteor.userId()
    });
    if (product) return true;
    return false;
  },
  isVisible() {
    const currentData = Template.currentData();
    return currentData && currentData.product && currentData.product.isVisible;
  },

  hasChanges() {
    const { product } = Template.currentData();

    if (product.__draft) {
      return true;
    }

    return false;
  },

  VisibilityButton() {
    return {
      component: IconButton,
      icon: "",
      onIcon: "",
      status: "info"
    };
  }
});
