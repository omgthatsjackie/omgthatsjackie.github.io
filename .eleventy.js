const {DateTime} = require("luxon");
const rss = require("@11ty/eleventy-plugin-rss");

module.exports = config => {
  config.addPlugin(rss);

  config.setUseGitIgnore(false);

  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");

  config.addFilter("readableDate", date => {
    return DateTime.fromJSDate(date, {zone: "utc"}).toFormat("dd LLL yyyy");
  });

  config.addFilter("htmlDateString", date => {
    return DateTime.fromJSDate(date, {zone: "utc"}).toFormat("yyyy-LL-dd");
  });

  return {
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    dataTemplateEngine: false,
    dir: {
      input: "src",
      output: "build"
    }
  };
};
