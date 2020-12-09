export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd0ae5b21b38be3f1da6f81',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-av6noumz',
                  apiId: '89713117-5160-4a45-ba6a-0995041ccf9d'
                },
                {
                  buildHookId: '5fd0ae5bd16d5ccfe519de65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1w4wsoea',
                  apiId: '0e9218c6-4ead-43e2-b635-88c8c02db43c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MuhammadTahseenurRehman/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1w4wsoea.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
