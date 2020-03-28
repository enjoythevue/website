// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Enjoy the Vue',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'episodes/**/*.md',
        typeName: 'Episode'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'panelists/**/*.md',
        typeName: 'Panelist'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'sponsors/**/*.md',
        typeName: 'Sponsor'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
};
