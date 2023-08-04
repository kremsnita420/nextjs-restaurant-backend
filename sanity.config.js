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
const PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID
export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: PROJECT_ID,
  dataset: 'production',

  plugins: [deskTool(), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'de', title: 'German' },
      { id: 'en', title: 'English' }
    ],
    schemaTypes: [
      'alcoholFreeDrinks',
      'alcoholDrinks',
      'mainDishes',
      'pizzas',
      'salads',
      'desserts'
    ],
    languageField: `language`
  }),
  // configure the dashboard tool with widgets
  dashboardTool({
    widgets: [
      projectUsersWidget({ layout: 'medium' }),
      projectUsersWidget({ layout: 'medium' }),
    ]
  })],

  schema: {
    types: schemaTypes,
  },
})
