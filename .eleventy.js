module.exports = function (eleventyConfig) {
  // 날짜를 한글 형식으로 바꾸는 필터 (예: 2026년 10월 8일)
  eleventyConfig.addFilter("krDate", function (dateObj) {
    const d = new Date(dateObj);
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
  });

  // 최근 글 N개만 자르는 필터
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // sitemap용 날짜 형식 (예: 2026-10-08)
  eleventyConfig.addFilter("sitemapDate", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  // images, videos, style.css, 기존 HTML 등은 그대로 복사해서 내보냄
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy(".gitattributes");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
