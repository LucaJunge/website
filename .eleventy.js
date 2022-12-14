const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
  //eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("src/**/*.png")
  eleventyConfig.addPassthroughCopy("src/**/*.jpg")
  eleventyConfig.addPassthroughCopy("src/css/modelviewer.css")

  eleventyConfig.addPassthroughCopy("src/**/*.glb")
  eleventyConfig.addPassthroughCopy({ "src/_assets/": "assets" })

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Europe/Berlin"
    }).setLocale("de").toLocaleString(DateTime.DATE_FULL)
  })

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  }
}
