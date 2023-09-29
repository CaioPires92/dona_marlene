import express, { json, Request, Response } from 'express'
import dotenv from 'dotenv'


import fruitsRouter from './routers/fruits-router'

dotenv.config()

function createServer() {
  const app = express()
  app.use(json())
  
  app.get('/health', (req: Request, res: Response) => res.send('ok!'))
  app.use(fruitsRouter)
  return app
}
 
export default createServer