import { Meteor } from "meteor/meteor";
import {
  Accounts,
  Cart,
  Orders,
  Products,
  Packages,
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
    const CollectionOption = (collection) => {
      return {
        routeOptions: {
          authRequired: true,
          roleRequired: "Admin"
        },
        endpoints: {
          // This request GETS a collection record
          get: {
            authRequired: false,
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

          // This request CREATES a collection record
          post: {
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
    Api.addCollection(Accounts, CollectionOption(Accounts));
    Api.addCollection(Cart, CollectionOption(Cart));
    Api.addCollection(Orders, CollectionOption(Orders));
    Api.addCollection(Products, CollectionOption(Products));
    Api.addCollection(Packages, CollectionOption(Packages));
    Api.addCollection(Shops, CollectionOption(Shops));
    Api.addCollection(Emails, CollectionOption(Emails));
    Api.addCollection(Shipping, CollectionOption(Shipping));
    Api.addCollection(Sms, CollectionOption(Sms));
  }
};
