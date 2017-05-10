/* eslint-disable max-len*/
import { ProductDetailContainer } from "../containers";
import { isRevisionControlEnabled } from "/imports/plugins/core/revisions/lib/api";
import { Template } from "meteor/templating";
import { ReactiveDict } from "meteor/reactive-dict";

Template.productDetailSimple.helpers({
  isEnabled() {
    return isRevisionControlEnabled();
  },
  PDC() {
    return ProductDetailContainer;
  }
});

Template.embedDisqus.onCreated(function () {
  this.state = new ReactiveDict();
  this.state.setDefault({
    feed: {}
  });
});

Template.embedDisqus.helpers({
  testDisplay() {
    return { disqus: "col-sm-12" };
  },

  addDisqusThread() {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://krc-1.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }

});
