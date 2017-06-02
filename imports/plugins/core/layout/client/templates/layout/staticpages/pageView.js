import { StaticPages } from "/lib/collections";

Template.pageView.onCreated(function () {
  this.subscribe("Pages");
});

Template.pageView.helpers({
  /**
   * @param {String} pageRoute
   * @return {Array} The array of data for the page
   */
  singlePage(pageRoute) {
    const page = StaticPages.findOne({
      pageRoute: `pages/${pageRoute}`
    });
    const pageData = [page];
    return pageData;
  }
});
