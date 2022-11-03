module.exports = function (eleventyConfig) {
  //eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("src/**/*.png")
  eleventyConfig.addPassthroughCopy("src/**/*.jpg")

  eleventyConfig.addPassthroughCopy("src/**/*.glb")

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
