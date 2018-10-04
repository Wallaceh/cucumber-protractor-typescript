let fs = require('fs-extra');
let path = require('path');

/**
 * @return {boolean}
 */
function CreateHTMLReport() {
  let reporter = require('cucumber-html-reporter');
  let theme = { bootstrap: 'bootstrap', simple: 'simple' };
  let outputDirectory = 'reports/html';
  let jsonFile = 'reports/json/cucumber-test-results.json';

  function getOptions(theme) {
    return {
      theme: theme,
      output: path.join(outputDirectory, 'cucumber-report.html'),
      reportSuiteAsScenarios: true,
      launchReport: false,
      metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome 54.0.2840.98',
        'Platform': 'Windows 10',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    };
  }

  function getJsonFileOptions(theme) {
    let options = getOptions(theme);
    options.jsonFile = jsonFile;
    return options;
  }

  fs.removeSync(outputDirectory);
  reporter.generate(getJsonFileOptions(theme.bootstrap));
  return true
}

module.exports = CreateHTMLReport;