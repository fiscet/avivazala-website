/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, sanityStudioTitle } from './src/app/sanityConf/env';
import { schemaTypes } from './src/app/sanityConf/schemaTypes';
import { structure } from './src/app/sanityConf/structure';
import { presentationTool } from 'sanity/presentation';
import { locate } from 'sanityConf/locate';

export default defineConfig({
  title: sanityStudioTitle + ' #' + process.env.NODE_ENV?.substring(0, 3),
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve: {
        locations: locate
      },
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    })
  ],
});
