const { DateTime } = require("luxon");
const Hashids = require("hashids/cjs");

module.exports = () => ({
  eleventyComputed: {
    title: (data) => `Order #${data.page.fileSlug}`,
    permalink: (data) => {
      const { fileSlug } = data.page;

      const hi = new Hashids(data.metadata.customerPermalinkSalt);

      return `/order/${hi.encode(fileSlug)}/`;
    },
    available: (data) => {
      const { expires } = data;

      // This is slightly incorrect because it recalculates the
      // current date for every single file, but it shouldn’t matter
      // in practice since there is no global baseline it needs to
      // adhere to.
      return DateTime.fromISO(expires) > DateTime.now();
    },
    productData: (data) => {
      // Return a placeholder in the first pass.
      if (data.collections.products.length === 0) {
        return "";
      }

      const product = data.collections.products.find(
        (p) => p.data.productId === data.productId
      );

      if (product === undefined) {
        throw new Error(`Unknown product ID: ${data.productId}`);
      }

      return `<p><a href="${product.data.targetUrl}">Open</a></p>`;
    },
  },
});
