import introJs from "intro.js";
import { Reaction } from "/client/api";
import { Meteor } from "meteor/meteor";
import { Accounts } from "/lib/collections";

const tour = introJs.introJs();
const adminTourSteps = [
  {
    intro: `<h2>Welcome to Reaction Commerce</h2>
    <hr>
    <div>
      Reaction Commerce is the first open source, real-time platform to combine the flexibility developers a
      nd designers want with the stability and support businesses need.
      Ecommerce is young and growing everyday. We know. We’ve spent decades building shops on platforms that we 
      outgrew or broke all together. We needed a platform that could evolve with the industry.
      So we built one that not only reacts to change, but inspires it.
      <br>This brief tour would give you all the necessary information needed to use this amazing platform
    </div>`
  },
  {
    intro: `<h2>The Products</h2>
    <hr>
    <div>
      All available products would be shown on this page<br>
      You can search for a product you want to view or buy here, when you find the product you can select it,
      you can also select other products and when you are satisfied you can add them to your cart and proceed to checkout 
      <br><strong>OR</strong>
      <br>As a Vendor/Admin you can REMOVE, UPDATE or ADD your products by clicking on them to visit your product management page.
    </div>`
  },
  {
    element: ".search",
    intro: `<h2>Searching for Products</h2>
    <hr>
    <div>
      Searching fro products to buy used to be a aweful experience but not anymore, 
      with reaction commerce our team of engineers have put in the effort to make sure 
      the users have the oppurtinity to get very specific search results and even filter them based on thier preferences,
      products can be sorted via:
      <ol>
        <li>price range.</li>
        <li>tags</li>
        <li>brands</li>
        <li>vendors</li>
        <li>product sales</li>
        <li>newest item</li>
      </ol>
      Search results appear immediately you start searching
      <br> and whne you find the product(s) you want to buy, add them to your cart and proceed to checkout
    </div>`
  },
  {
    element: ".cart",
    intro: `<h2>Your Cart</h2>
    <hr>
    <div>
      So you've found that product or those products and added them to you cart, good job. Now
      it's time to check out :-).<br>
      Click on the icon to check out. <br>
      Please note that offer two means of payment for your convinence
      <ol>
        <li>
          <strong>Google Wallet</strong>
        </li>
        <li>
          <strong>Paystack</strong>
        </li>
      </ol>
    </div>`
  },
  {
    element: ".languages",
    intro: `<h2>Languages</h2>
    <hr>
    <div>
      Language is never a barrier. <br> Here at reaction commerce we understand that communtication between the products and the consumers is a priority
      and we aim to provide our services to everyone around the world regardless of their language.<br>
      Just click on language icon and select you preferred language from the dropdown.
    </div>`
  },
  {
    element: "#accounts",
    intro: `<h2>Account Options</h2>
    <hr>
    <div style="height:200px; overflow-y: scroll;">
      Here we have several other options to help you customize your account, and also get the best out of
      <strong>Reaction</strong> Commerce. Just choose from one of the following options available in the dropdown shown in the screen shot below
      <ol>
        <li>
          <strong>Profile: </strong>view and update your profile details.
        </li>
        <li>
          <strong>Wallet: </strong>  Fund your wallet, transfer funds to other users wallet and more.
        </li>
        <li>
          <strong>Dashboard: </strong> View your dashboard. Manage the various packages offered by <strong>Reaction</strong>
        </li>
        <li>
          <strong>Orders: </strong> Checkout orders for your products and carry out actions related to your customers orders
        </li>
        <li>
          <strong>Add Products: </strong> Add new products to your shop
        </li>
        <li>
          <strong>Account: </strong> View and manage accounts of your clients.
        </li>
        <li>
          <strong>Actionable Analytics: </strong> Analyse data from your users and products to guide in making improving
          your market strategies
        </li>
        <li>
          <strong>Sign out: </strong> Though we hate to see you leave, if need arises you can always logout to keep your account
          safe from unathorized access. <br>
          You can always log back in by clicking the same account button next time.
        <l/i>
      <ol>
      <img src= "/resources/admin_accounts.png" class="product-grid-item-images img-responsive">
    </div>`
  },
  {
    element: ".admin-controls-menu",
    intro: `<h2>Admin Controls</h2>
    <hr>
    <div style="height:200px; overflow-y: scroll;">
      There are several functionalities available to you as an Admin/Vendor to futher customize you experience on your store.
      Quick access to this functionalities are available through the controls which appear here.
      Do note that besides the functionalities which appear here, you can view and manage all packages available to you by clicking on the
      dashboard control
      <br>
      Examples are:
      <ol>
        <li>
          <strong>Dashboard: <span></strong><img src= "/resources/dashboard.png" class="product-grid-item-images img-responsive"></span>
        </li>
        <li>
          <strong>Orders: <span></strong><img src= "/resources/orders.png" class="product-grid-item-images img-responsive"></span>
        </li>
        <li>
          <strong>Accounts: <span></strong><img src= "/resources/admin_accounts.png" class="product-grid-item-images img-responsive"></span>
        </li>
        <li>
          <strong>Actionable Analytics: <span></strong><img src= "/resources/actionable_analytics.png" class="product-grid-item-images img-responsive"></span>
        </li>
        <li>
          <strong>Add Products: <span></strong><img src= "/resources/add_product.png" class="product-grid-item-images img-responsive"></span>
        </li>
      </ol>
    </div>`
  },
  {
    element: ".tour",
    intro: `<h2>Tour</h2>
    <hr>
    <div>
      Wow, you completed the tour, looks like you are ready to own a shop on this platform,
      may the odds ever be in our favour
    </div>`
  }
];

const registeredBuyerTourSteps = [
  {
    intro: `<h1>Welcome to Reaction Commerce</h1>
    <hr>
    <div>
      Reaction Commerce is the first open source, real-time platform to combine the flexibility developers a
      nd designers want with the stability and support businesses need.
      Ecommerce is young and growing everyday. We know. We’ve spent decades building shops on platforms that we 
      outgrew or broke all together. We needed a platform that could evolve with the industry.
      So we built one that not only reacts to change, but inspires it.
      <br>This brief tour would give you all the necessary information needed to use this amazing platform
    </div>`
  },
  {
    intro: `<h2>The Products</h2>
    <hr>
    <div>
      All available products would be shown on this page<br>
      You can search for a product you want to view or buy here, when you find the product you can select it,
      you can also select other products and when you are satisfied you can add them to your cart and proceed to checkout 
      <br><strong>OR</strong>
      <br>As a Vendor/Admin you can REMOVE, UPDATE or ADD your products by clicking on them to visit your product management page.
    </div>`
  },
  {
    element: ".search",
    intro: `<h2>Searching for Products</h2>
    <hr>
    <div>
      Searching fro products to buy used to be a aweful experience but not anymore, 
      with reaction commerce our team of engineers have put in the effort to make sure 
      the users have the oppurtinity to get very specific search results and even filter them based on thier preferences,
      products can be sorted via:
      <ol>
        <li>price range.</li>
        <li>tags</li>
        <li>brands</li>
        <li>vendors</li>
        <li>product sales</li>
        <li>newest item</li>
      </ol>
      Search results appear immediately you start searching
      <br> and whne you find the product(s) you want to buy, add them to your cart and proceed to checkout
    </div>`
  },
  {
    element: ".cart",
    intro: `<h2>Your Cart</h2>
    <hr>
    <div>
      So you've found that product or those products and added them to you cart, good job. Now
      it's time to check out :-).<br>
      Click on the icon to check out. <br>
      Please note that offer two means of payment for your convinence
      <ol>
        <li>
          <strong>Google Wallet</strong>
        </li>
        <li>
          <strong>Paystack</strong>
        </li>
      </ol>
    </div>`
  },
  {
    element: ".languages",
    intro: `<h2>Languages</h2>
    <hr>
    <div>
      Language is never a barrier. <br> Here at reaction commerce we understand that communtication between the products and the consumers is a priority
      and we aim to provide our services to everyone around the world regardless of their language.<br>
      Just click on language icon and select you preferred language from the dropdown.
    </div>`
  },
  {
    element: "#accounts",
    intro: `<h2>Account Options</h2>
    <hr>
    <div>
      Here you can access several other account related options by clicking to reveal the dropdown:
      <ol>
        <li>
          <strong>Profile:</strong> view your profile, update your profile and even upgrade your account to a Vendor account
        </li>
        <li>
          <strong>Wallet:</strong> Fund your wallet, transfer funds to other users wallet and more.
        </li>
        <li>
          <strong>Sign-out:</strong> Here you can signout of the account. <br>
          You can log back in by clicking the same account button.
        </li>
        <img src= "/resources/guest_account.png" class="product-grid-item-images img-responsive">
      </ol>
    </div>`
  },
  {
    element: ".tour",
    intro: `<h2>Tour</h2>
    <hr>
    <div>
      Wow, you completed the tour, looks like you are ready to start shopping on this platform,
      may the odds ever be in our favour
    </div>`
  }
];

const unregisteredBuyerTourSteps = [
  {
    intro: `<h1>Welcome to Reaction Commerce</h1>
    <hr>
    <div>
      Reaction Commerce is the first open source, real-time platform to combine the flexibility developers a
      nd designers want with the stability and support businesses need.
      Ecommerce is young and growing everyday. We know. We’ve spent decades building shops on platforms that we 
      outgrew or broke all together. We needed a platform that could evolve with the industry.
      So we built one that not only reacts to change, but inspires it.
      <br>This brief tour would give you all the necessary information needed to use this amazing platform
    </div>`
  },
  {
    intro: `<h2>The Products</h2>
    <hr>
    <div>
      All available products would be shown on this page<br>
      You can search for a product you want to view or buy here, when you find the product you can select it,
      you can also select other products and when you are satisfied you can add them to your cart and proceed to checkout 
      <br><strong>OR</strong>
      <br>As a Vendor/Admin you can REMOVE, UPDATE or ADD your products by clicking on them to visit your product management page.
    </div>`
  },
  {
    element: ".search",
    intro: `<h2>Searching for Products</h2>
    <hr>
    <div>
      Searching fro products to buy used to be a aweful experience but not anymore, 
      with reaction commerce our team of engineers have put in the effort to make sure 
      the users have the oppurtinity to get very specific search results and even filter them based on thier preferences,
      products can be sorted via:
      <ol>
        <li>price range.</li>
        <li>tags</li>
        <li>brands</li>
        <li>vendors</li>
        <li>product sales</li>
        <li>newest item</li>
      </ol>
      Search results appear immediately you start searching
      <br> and whne you find the product(s) you want to buy, add them to your cart and proceed to checkout
    </div>`
  },
  {
    element: ".cart",
    intro: `<h2>Your Cart</h2>
    <hr>
    <div>
      So you've found that product or those products and added them to you cart, good job. Now
      it's time to check out :-).<br>
      Click on the icon to check out. <br>
      Please note that offer two means of payment for your convinence
      <ol>
        <li>
          <strong>Google Wallet</strong>
        </li>
        <li>
          <strong>Paystack</strong>
        </li>
      </ol>
    </div>`
  },
  {
    element: ".languages",
    intro: `<h2>Languages</h2>
    <hr>
    <div>
      Language is never a barrier. <br> Here at reaction commerce we understand that communtication between the products and the consumers is a priority
      and we aim to provide our services to everyone around the world regardless of their language.<br>
      Just click on language icon and select you preferred language from the dropdown.
    </div>`
  },
  {
    element: "#accounts",
    intro: `<h2>Account Options</h2>
    <hr>
    <div>
      To buy a product you would need to register on the platform:<br>
     Please click on this icon to register and enjoy the full benefits of reaction commerce
    </div>`
  },
  {
    element: ".tour",
    intro: `<h2>Tour</h2>
    <hr>
    <div>
      Wow, you completed the tour, looks like you are ready to start shopping on this platform,
      may the odds ever be in our favour
    </div>`
  }
];

const updateTakenTour = () => {
  if (!Accounts.findOne(Meteor.userId()).takenTour) {
    Accounts.update({ _id: Meteor.userId() }, { $set: { takenTour: true } });
  }
};

export function playTour() {
  let tourSteps;
  if (Reaction.hasPermission("admin")) {
    tourSteps = adminTourSteps;
  } else if (!Reaction.hasPermission("anonymous")) {
    tourSteps = registeredBuyerTourSteps;
  } else {
    tourSteps = unregisteredBuyerTourSteps;
  }
  tour.setOptions({
    showBullets: true,
    showProgress: true,
    scrollToElement: true,
    showStepNumbers: false,
    tooltipPosition: "auto",
    steps: tourSteps
  });
  tour.onexit(updateTakenTour)
  .oncomplete(updateTakenTour);
  tour.start();
}
