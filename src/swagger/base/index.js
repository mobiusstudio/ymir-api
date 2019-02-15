import definitions from './definitions'
import { errorDescription } from './definitions/error'
import paths from './paths'
import tags from './tags'

const swagger = {
  swagger: '2.0',
  info: {
    title: 'Owlly Management API',
    description: `
the API of Owlly Management
<style>
.info_description table, .info_description thead, .info_description tbody, .info_description tr {
  width: 100%;
  display: block;
}
.info_description th, .info_description td {
  width: 50%;
  display: block;
  float: left;
  box-sizing: border-box;
}
.info_description tbody {
  display: block;
  height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
`,
    version: '0.0.1',
  },
  host: 'localhost:10001', // TODO base on env
  schemes: ['http', 'https'],
  basePath: '/',
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      name: 'X-Auth-Key',
      in: 'header',
    },
    // apiOauth2: {
    //	 type: 'oauth2',
    //	 authorizationUrl: 'https://to-be-done.com/auth',
    //	 flow: 'implicit',
    //	 scopes: {
    //		 'write:all': 'TODO not defined',
    //	 },
    // },
  },
  tags,
  paths,
  definitions,
}

export default swagger
