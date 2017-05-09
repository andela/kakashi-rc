import {
  Meteor
} from "meteor/meteor";
import {
  Accounts,
  Cart,
  Orders,
  Products,
  Shops,
  Emails,
  Shipping,
  Sms
} from "/lib/collections/collections";

export default () => {
  if (Meteor.isServer) {
    // Global API configuration
    const Api = new Restivus({
      useDefaultAuth: true,
      prettyJson: true
    });

    // Set Endpoint Configuration
    const CollectionOption = (collection, collectionName) => {
      let isAuth;
      if (collectionName === "Products" ||
          collectionName === "Shops") {
        isAuth = false;
      } else {
        isAuth = true;
      }
      return {
        routeOptions: {
          authRequired: isAuth
        },
        endpoints: {
          // This request GETS a collection record
          get: {
            action() {
              const CollectionRecords = collection.find();
              if (CollectionRecords) {
                return {
                  statusCode: 201,
                  status: "success",
                  data: CollectionRecords
                };
              }
              return {
                statusCode: 404,
                status: "false",
                message: "Records could not be found"
              };
            }
          },

          get: {
            action() {
              const CollectionRecords = collection.findOne(this.urlParams.id);
              if (CollectionRecords) {
                return {
                  statusCode: 201,
                  status: "success",
                  data: CollectionRecords
                };
              }
              return {
                statusCode: 404,
                status: "false",
                message: "Records could not be found"
              };
            }
          },

          // This request CREATES a collection record
          post: {
            authRequired: true,
            action() {
              const isCreated = collection.insert(this.bodyParams);
              if (isCreated) {
                return {
                  statusCode: 201,
                  status: "success",
                  data: isCreated
                };
              }

              return {
                statusCode: 400,
                status: "false",
                message: "Error creating a record"
              };
            }
          },

          // This request UPDATES a collection record
          put: {
            authRequired: true,
            action() {
              const isUpdated = collection.update(this.urlParams.id, {
                $set: this.bodyParams
              });
              if (isUpdated) {
                return {
                  statusCode: 201,
                  status: "success",
                  data: isUpdated
                };
              }
              return {
                statusCode: 400,
                status: "fail",
                message: "Error finding record"
              };
            }
          },

          // This request DELETES a collection record
          delete: {
            authRequired: true,
            roleRequired: ["author", "admin"],
            action: function () {
              if (collection.remove(this.urlParams.id)) {
                return {
                  status: "success",
                  data: {
                    message: "collection removed"
                  }
                };
              }
              return {
                statusCode: 404,
                body: {
                  status: "fail",
                  message: "collection not found"
                }
              };
            }
          }
        }
      };
    };

    // Generates: GET, POST on /api/{the collection} and GET, PUT, PATCH, DELETE on
    // /api/items/{the record :id} for the collection
    Api.addCollection(Accounts, CollectionOption(Accounts, "Accounts"));
    Api.addCollection(Cart, CollectionOption(Cart, "Cart"));
    Api.addCollection(Orders, CollectionOption(Orders, "Orders"));
    Api.addCollection(Products, CollectionOption(Products, "Products"));
    Api.addCollection(Shops, CollectionOption(Shops, "Shops"));
    Api.addCollection(Emails, CollectionOption(Emails, "Emails"));
    Api.addCollection(Shipping, CollectionOption(Shipping, "Shipping"));
    Api.addCollection(Sms, CollectionOption(Sms, "Sms"));
  }
};
