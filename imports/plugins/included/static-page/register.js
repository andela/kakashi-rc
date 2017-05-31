import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Static Page",
  name: "Static Pages",
  icon: "fa fa-file-text-o",
  autoEnable: true,
  registry: [{
    route: "/dashboard/static-page",
    provides: "dashboard",
    workflow: "corePagesWorkFlow",
    name: "Static Page",
    label: "Static Page",
    description: "Add and Manage Static Pages",
    icon: "fa fa-plus",
    priority: 1,
    container: "core",
    template: "staticPageLayout"
  }],
  layout: [{
    layout: "coreLayout",
    workflow: "corePagesWorkFlow",
    theme: "default",
    enabled: true,
    structure: {
      template: "staticPageLayout",
      layoutHeader: "layoutHeader",
      layoutFooter: "layoutFooter",
      notFound: "notFound",
      dashboardHeader: "dashboardHeader",
      dashboardControls: "dashboardControls",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
