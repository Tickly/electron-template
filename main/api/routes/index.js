import Router from '@koa/router'
import user from './user'

const routes = [
  user,
]

export const createRouter = app => {
  const router = new Router()

  for (const route of routes) {
    router.use('/', route.routes(), route.allowedMethods())
  }

  app
    .use(router.routes())
    .use(router.allowedMethods())
}