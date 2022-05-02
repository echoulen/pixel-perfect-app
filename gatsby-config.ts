import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `pixel-perfect-app`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-eslint`,
  ],
};

export default config;
