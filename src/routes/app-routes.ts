import { Application, Router } from 'express';

export class AppRoutes {
    addRoute(route: string, app: Application, router: Router | null) {
        if (router !== null) {
            app.use(route, router)
        }
    }
}