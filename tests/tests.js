// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

// QUnit test case - make sure the Footer menu is rendered
test("Footer menu is rendered", function() {
    expect(4);
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        notEqual(find("#Footer").val(), null, "Footer div is rendered");
        equal(find(".footerLinksDiv").length, 3, "Footer Links Columns get rendered");
        notEqual(find(".copyright").val(), null, "Copyright div gets rendered");
        equal(find(".copyright").text().trim(), '@Copyright 2014 ChibsDCreator', "Copyright div has the correct value");
        //equal(find(".projects").text().trim(), "Projects", "projects header text is correct");
    });
});

// QUnit test case - make sure the additional info div is rendered
test("additional info div is rendered", function() {
    expect(1);
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        notEqual(find("#additionalInfo").val(), null, "additional info div is rendered");
        //equal(find(".projects").text().trim(), "Projects", "projects header text is correct");
    });
});

// QUnit test case - make sure the 3 project divs are rendered
test("three project divs are rendered", function() {
    expect(1);
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        equal(find(".project").length, 3, "the 3 projects containers are rendered");
        //equal(find(".projects").text().trim(), "Projects", "projects header text is correct");
    });
});

// QUnit test case 4 - make sure the projects header is rendered
test("projects header is rendered", function() {
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        notEqual(find("#projectsHeader").val(), null, "projects header is rendered");
        equal(find("#projectsHeader").text().trim(), "Projects", "projects header text is correct");
    });
});

// QUnit test case 3 - make sure the profile image box is rendered
test("profile image box is rendered", function() {
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        notEqual(find("#profileImage").val(), null, "Profile image box exists");
    });
});

// QUnit test case 1 - make sure the site title is rendered
test("site title is rendered", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("h2").text(), "ChibsDCreator", "Site title is rendered");

  });
});

// QUnit test case 2 - make sure the navbar is rendered
test("navbar is rendered", function() {
    // async helper telling the application to go to the '/' route
    visit("/Home");

    // helper waiting the application is idle before running the callback
    andThen(function() {
        equal(find(".navbar ul.nav li.active").text(), "Home", "Home link in Navbar is rendered");
        equal(find("h2").text(), "ChibsDCreator", "Site title (ChibsDCreator) is rendered");
        equal(find(".navbar ul.nav li").length, 4, "There are four items in the Navbar");
    });
});