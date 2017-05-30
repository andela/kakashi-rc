import { SimpleSchema } from "meteor/aldeed:simple-schema";

// Schema for staic pages

export const StaticPage  = new SimpleSchema({
  pageTitle: {
    type: String,
    label: "Page Title",
    optional: false
  },
  pageContent: {
    type: String,
    label: "Page Content",
    optional: false
  },
  pageAuthor: {
    type: String,
    label: "Author",
    optional: false
  },
  pageStatus: {
    type: String,
    label: "Page Status",
    defaultValue: "draft",
    optional: false
  },
  pageUrl: {
    type: String,
    label: "Permalink",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue() {
      if (this.isUpdate) {
        return {
          $set: new Date
        };
      } else if (this.isUpsert) {
        return {
          $setOnInsert: new Date
        };
      }
    },
    optional: true
  },
  shopId: {
    type: String,
    label: "shop Id",
    optional: false
  }
});
