/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://xn-----6kcbab1advferbt2a3eta1nya.xn--p1ai",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/decryption/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
