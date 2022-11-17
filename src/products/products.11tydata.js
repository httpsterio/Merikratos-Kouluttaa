module.exports = () => ({
  eleventyComputed: {
    productId: (data) => data.productId || data.page.fileSlug,
  },
});
