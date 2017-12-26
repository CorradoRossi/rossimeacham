module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: 'Rossi Meacham!',
    title: `Rossi Meacham's Blog`,
    siteUrl: `https://rossimeacham.com`,
    description: `I'm Rossi Meacham, a web developer, crypto junkie and enthusiastic doer of things. My mission is to write clean and efficient code, to solve problems on the web and to keep learning until I stop breathing.`
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true
            }
          },
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rossi Meacham",
        short_name: "RMeacham",
        start_url: "/",
        theme_color: "#4e4376",
        display: "minimal-ui",
        icons: [
          {
            src: `/favicons/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-192.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-36.png`,
            sizes: `36x36`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon/favicon-96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rossimeacham.com`,
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
              .filter(post => !post.node.frontmatter.draft)
              .map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      path
                      draft
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml'
          }
        ]
      }
    }
  ],
}
