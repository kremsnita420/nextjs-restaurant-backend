import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import {
  dashboardTool,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard";
import { documentInternationalization } from '@sanity/document-internationalization'
export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: 'w2fhosuu',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'de', title: 'German' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: ['alcoholDrinks'],
    languageField: `language`
  }),
  // configure the dashboard tool with widgets
  dashboardTool({
    widgets: [
      projectUsersWidget({ layout: 'medium' }),
      projectUsersWidget(),
    ]
  })],

  schema: {
    types: schemaTypes,
  },
})
