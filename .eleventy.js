module.exports = function (eleventyConfig) {
     // 날짜를 한글 형식으로 바꾸는 필터 (예: 2026년 10월 8일)
  eleventyConfig.addFilter("krDate", function (dateObj) {
    const d = new Date(dateObj);
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
  });

  // images, videos, style.css, 기존 HTML 등은 그대로 복사해서 내보냄
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("videos");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("llms.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy(".gitattributes");

  return {
    dir: {
      input: ".",            // 현재 폴더 전체를 입력으로 봄
      includes: "_includes", // 템플릿은 _includes 폴더에 둠
      output: "_site",       // 변환 결과는 _site 폴더에 만들어짐
    },
    // Markdown과 HTML을 변환 대상으로 삼음
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
