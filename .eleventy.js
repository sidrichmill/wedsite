module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Shared list of nav pages, available to every template as `nav`
  eleventyConfig.addGlobalData("nav", [
    { title: "RSVP", url: "/rsvp/" },
    { title: "Our Story", url: "/our-story/" },
    { title: "Dress Code", url: "/dress-code/" },
    { title: "Q&A", url: "/qa/" },
    { title: "Venue", url: "/venue/" },
    { title: "Where To Stay", url: "/where-to-stay/" },
    { title: "Honeymoon Fund", url: "/honeymoon-fund/" },
  ]);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    // Lets us write plain .html files as Nunjucks too, if ever needed
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
