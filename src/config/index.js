const env = process.env.NODE_ENV || 'production'

// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${env}.json`)

console.log(`------ env: ${env} -------`)

export default config
