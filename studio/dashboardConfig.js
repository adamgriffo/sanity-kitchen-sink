export default {
  widgets: [
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
                  buildHookId: '5ee2b52ed18e74e7d18e222e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kvodz99g',
                  apiId: 'cb136c92-a70f-4df0-9e02-dad1bc482e14'
                },
                {
                  buildHookId: '5ee2b52efb97c1f2521194ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mkueh9bu',
                  apiId: '849b6b0e-23e3-4104-a1b3-f4c4447cd61c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamgriffo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mkueh9bu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
