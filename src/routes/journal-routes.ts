import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

export class JournalRoutes {

    #router: Router | null = null

    get router(): Router | null {
        return this.#router
    }

    init() {
        if (this.#router !== null) return;

        this.#router = Router()
        this.#router?.get('/', (req: Request, res: Response) => {
            res.status(StatusCodes.OK).json({ message: 'JournalRoutes.get called' })
        })
    }

}