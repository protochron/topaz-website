/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  sidebar: [
    'intro',
    'architecture',
    {
      'Getting Started': [
        'getting-started/index',
        'getting-started/configuration',
      ]
    },
    {
      'Deployment': [
        'deployment/index',
      ]
    },
    {
      'Authorizer': [
        'authorizer-guide/overview',
        'authorizer-guide/authz',
        'authorizer-guide/identity-context',
        'authorizer-guide/resource-context',
        'authorizer-guide/policy-context',
        'authorizer-guide/is',
        'authorizer-guide/decisiontree',
        'authorizer-guide/query',
        'authorizer-guide/display-state-map',
      ]
    },
    {
      'Directory': [
        'directory/index',
        'directory/define-domain-model',
        'directory/creating-instances',
        'directory/loading-identities'
      ]
    },
    {
      'Policies': [
        'policies/index',
        'policies/lifecycle'
      ]
    },
    {
      'SDKs': [
        'software-development-kits/overview',
        {
          'JavaScript': [
            'software-development-kits/javascript/express',
            'software-development-kits/javascript/react',
            'software-development-kits/javascript/spa',
          ]
        },
        {
          'Go': [
            'software-development-kits/go/install',
            'software-development-kits/go/authorizer',
            'software-development-kits/go/middleware-http',
            'software-development-kits/go/middleware-grpc',
          ]
        },
        {
          'Python': [
            'software-development-kits/python/api-client',
            'software-development-kits/python/authorizers',
            'software-development-kits/python/flask',
            'software-development-kits/python/identity-providers',
          ]
        },
        'software-development-kits/dotnet/index',
        {
          'Ruby': [
            'software-development-kits/ruby/middleware',
            'software-development-kits/ruby/rails',
          ]
        }
      ]
    },
    {
      'CLIs': {
        'Policy CLI': [
          'command-line-interface/policy-cli/download',
          'command-line-interface/policy-cli/login',
          'command-line-interface/policy-cli/init',
          'command-line-interface/policy-cli/build',
          'command-line-interface/policy-cli/images',
          'command-line-interface/policy-cli/tag',
          'command-line-interface/policy-cli/push',
          'command-line-interface/policy-cli/pull',
          'command-line-interface/policy-cli/rm',
          'command-line-interface/policy-cli/export',
          'command-line-interface/policy-cli/repl',
          'command-line-interface/policy-cli/sign',
          'command-line-interface/policy-cli/open-policy-registry',
        ]
      }
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;