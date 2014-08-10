if (window.location.search.indexOf("?test") !== -1) {
  document.write(
    '<div id="qunit"></div>' +
    '<!--NOTE::: The test page gets refreshed automatically every 10 minutes -->' +
    '<div id="qunit-fixture"></div>' +
    '<div id="ember-testing-container">' +
    '  <div id="ember-testing"></div>' +
    '</div>' +
    '<link rel="stylesheet" href="tests/runner.css">' +
    '<link rel="stylesheet" href="tests/vendor/qunit-1.12.0.css">' +
    '<meta http-equiv="refresh" content="600">' +
    '<script src="tests/vendor/qunit-1.12.0.js"></script>' +
    '<script src="tests/tests.js"></script>'
  )
}
