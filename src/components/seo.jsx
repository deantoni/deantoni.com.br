/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../hooks/use-site-metadata";
import logo from "../images/favicon.png";

function SEO({ title, description = "", lang = "en", locale = "en_US", meta = [] }) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteMetadata.image,
        },
        {
          property: `og:image:secure_url`,
          content: siteMetadata.imageSecure,
        },
        {
          property: `og:locale`,
          content: locale,
        },
        {
          property: `og:url`,
          content: siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={logo} />
    </Helmet>
  );
}

export default SEO;
