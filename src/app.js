import express from 'express'
import cors from 'cors'

//TODO: adicionar as rotas
const app = express()
app.use(express.json())
app.use(cors())

export default app
