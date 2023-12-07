const { DateTime } = require("luxon")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)

  //eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("src/**/*.png")
  eleventyConfig.addPassthroughCopy("src/**/*.jpg")
  eleventyConfig.addPassthroughCopy("src/css/*.css")
  eleventyConfig.addPassthroughCopy("src/libs/**/*.js")
  eleventyConfig.addPassthroughCopy({ "src/_assets/": "assets" })

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "Europe/Berlin",
    })
      .setLocale("de")
      .toLocaleString(DateTime.DATE_FULL)
  })

  // Filter for showing excerpts of posts on the "/posts/" site, limited to 180 characters (about 4 lines on mobile)
  eleventyConfig.addFilter("createExcerpt", (post) => {
    // This removes "<" and ">" from the output
    const content = post.replace(/(<([^>]+)>)/gi, "")
    return content.substr(0, content.lastIndexOf(" ", 180)) + "..."
  })

  eleventyConfig.addFilter("stringify", (object) => {
    return JSON.stringify(object, null, 2)
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "build",
    },
  }
}
