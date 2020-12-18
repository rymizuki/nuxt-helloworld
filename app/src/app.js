import express from 'express'
import { Nuxt } from 'nuxt'
import api from './api'

const config = require('../nuxt.config')
config.dev = false
config.mode = 'universal'
const nuxt = new Nuxt(config)

const app = express()

app.use('/api', api)

app.use(nuxt.render)

export default app
