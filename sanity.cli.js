import { defineCliConfig } from 'sanity/cli'
const PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID
export default defineCliConfig({
  api: {
    projectId: PROJECT_ID,
    dataset: 'production'
  }
})
