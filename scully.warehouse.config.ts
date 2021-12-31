import { ScullyConfig } from '@scullyio/scully'

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'warehouse',
  outDir: './dist/static',
  routes: {
    '/articles/:id': {
      type: 'json',
      id: {
        url: 'http://localhost:9999/api/articles',
        property: 'id',
        /**
         * resultsHandler: (response: any) => any[]
         *
         * If the `url` returns an object, use the `resultsHandler` to map that object
         * into an array of objects/ids.
         *
         * In the following example, the server returned an object where the articles were
         * nested inside of the `response.data` property. So the resultsHandler returns
         * `response.data.articles`.
         */
        resultsHandler: (response) => {
          return response.docs
        },
      },
    },
    '/articles/:id/edit': {
      type: 'json',
      id: {
        url: 'http://localhost:9999/api/articles',
        property: 'id',
        /**
         * resultsHandler: (response: any) => any[]
         *
         * If the `url` returns an object, use the `resultsHandler` to map that object
         * into an array of objects/ids.
         *
         * In the following example, the server returned an object where the articles were
         * nested inside of the `response.data` property. So the resultsHandler returns
         * `response.data.articles`.
         */
        resultsHandler: (response) => {
          return response.docs
        },
      },
    },
  },
}
