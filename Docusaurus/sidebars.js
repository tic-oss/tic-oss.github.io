/**
 * Creating a sidebar enables you to:
 'create an ordered group of docs
 'render a sidebar for each doc of that group
 'provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts'heck

/** @type {import('@docusaurus/plugin'ontent'ocs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: "Developer's Guide",
      items: [
        'DevelopersGuide/Concept',
        {
          type: 'category',
          label: 'CanvasToCode',
          items: ['DevelopersGuide/MindMap/GetStarted'],
        },
        {
          type: 'category',
          label: 'Generating-WDI',
          items: ['DevelopersGuide/Generating-WDI/BuildingWDI'],
        },
        {
          type: 'category',
          label: 'Generating-WDA(Deprecated)',
          items: ['DevelopersGuide/Generating-WDA/BuildingWDA'],
        },
      ],
    },
  ],
  documentationSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'Documentation/concept',
        {
          type: 'category',
          label: 'Canvas To Code',
          items: [
            'Documentation/MindMap/GlobalConfigurations',
            'Documentation/MindMap/Introduction',
            'Documentation/MindMap/Prerequisites',
            'Documentation/MindMap/Projectstructure',
            'Documentation/MindMap/ServiceNode',
            'Documentation/MindMap/UIandGateway',
          ],
        },
        {
          type: 'category',
          label: 'WDI',
          items: [
            'Documentation/WDI/Prerequisites',
            'Documentation/WDI/WDI',
          ],
        },
        {
          type: 'category',
          label: 'WDA(Deprecated)',
          items: [
            'Documentation/WDA/Application',
            'Documentation/WDA/Communication',
            'Documentation/WDA/Deployment',
            'Documentation/WDA/Prerequisites',
            'Documentation/WDA/WDA',
          ],
        },  
      ],
    },
  ],
};

module.exports = sidebars;





