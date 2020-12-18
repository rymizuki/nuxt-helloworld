import express from 'express'

const app = express()
const router = express.Router()

router.get('/hello', (_req, res) => {
  res.json({ message: 'hello world' })
})

app.use(express.urlencoded({ extended: true }))
app.use(router)

export default app
