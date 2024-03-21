function showDraft(data) {
  const isDraft = 'draft' in data && data.draft !== false

  return !isDraft
}

module.exports = function () {
  return {
    eleventyComputed: {
      eleventyExcludeFromCollections: function (data) {
        if (showDraft(data)) {
          return data.eleventyExcludeFromCollections;
        } else {
          return true
        }
      },
      permalink: function (data) {
        if (showDraft(data)) {
          return data.permalink
        } else {
          return false
        }
      }
    }
  }
}
