import express from 'express'
import {Server} from 'http'
import bodyParser from 'body-parser'
import winston from 'winston-color'
import chalk from 'chalk'
import path from 'path'
import pkg from '../package.json'
import getRouter from './routes'

const _parentDir = path.dirname(__dirname)

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston,
  packageName: pkg.name
}

const router = getRouter(options)
const { app, environment, port, logger, packageName } = options

const server = Server(app)
const io = require('socket.io')(server)
options.io = io;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  if (environment !== 'test') {
    logger.info(req.method, req.path)
  }
  next()
})

app.use('/api', router)

app.use('/css', express.static(path.join(_parentDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(express.static(path.join(__dirname, 'static')))

io.on('connection', (socket) => {
  logger.info('connected')
})

server.listen(port, () => {
  logger.info(`${chalk.bgBlack.cyan(packageName)} listening on port ${port}...`)
})

export default server