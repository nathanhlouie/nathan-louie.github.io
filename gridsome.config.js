module.exports = {
  siteName: "Nathan Louie",
  siteDescription: "My development portfolio!",
  siteUrl: "https://nathan.louie.ca",
  titleTemplate: "%s | Nathan Louie",

  templates: {
    Post: "/:title",
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
      },
    },
  ],

  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
