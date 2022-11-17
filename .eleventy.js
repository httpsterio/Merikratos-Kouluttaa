module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets/avatar');
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.setWatchThrottleWaitTime(200);
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
