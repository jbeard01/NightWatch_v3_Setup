const HtmlReporter = require('./ostro-html-reporter');
const { Logger } = require('nightwatch/lib/utils');
const getNormalDateTimeString = function () {
  const now = new Date();
  const date = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}-${minutes} ${date}-${month}-${year}`;
}

const currentDate = getNormalDateTimeString();
const name = (process.env?.CI_COMMIT_BRANCH || 'local').replace('/', '_').slice(0,249);
const testEnv = process.env.TEST_ENV


module.exports = {
  adaptResults(results, options) {
    const reporter = new HtmlReporter(results, options);
    return reporter.adaptResults();
  },
  write: function (results, options, done) {
    const runPlatforms = Object.keys(results.modulesWithEnv).join('-');
    const reporter = new HtmlReporter(
      results,
      {
        ...options,
        reportsDirectory: './tests_output',
        uniqueFilename: true,
        separateReportPerSuite: false,
        folder_format: `${name} on ${runPlatforms} in ${testEnv}-env at ${currentDate}`,
        shouldOpenReport: false,
      }
    );

    reporter.writeReport()
      .then(_ => { done(); })
      .catch(err => { Logger.error(err); done(err); });
  }
};
