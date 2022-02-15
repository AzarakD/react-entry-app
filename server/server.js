const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('server/database.json')
const middlewares = [jsonServer.defaults(), jsonServerAuth]

server.db = router.db

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
