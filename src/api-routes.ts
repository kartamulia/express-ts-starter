import { Router } from 'express';

export class ApiRoutes {
    #router: Router | null = null

    init() {
        this.#router = Router()
    }

    get router(): Router | null {
        return this.#router
    }

    addRoute(route: string, router: Router | null) {
        if (this.#router !== null && router !== null) {
            this.#router.use(route, router)
        }
    }
}