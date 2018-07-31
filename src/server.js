import express from 'express'
import { Nuxt } from 'nuxt'
import awsServerlessExpress from 'aws-serverless-express'
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import { Server } from 'tls';

const config = require('../nuxt.config')
config.dev = false
config.mode = 'universal'
const nuxt = new Nuxt(config)

const app = express()
app.use(nuxt.render)
app.use(awsServerlessExpressMiddleware.eventContext)

const server = awsServerlessExpress.createServer(app)

export function render(event, context) {
  awsServerlessExpress.proxy(server, event, context)
}
