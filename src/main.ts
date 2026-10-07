import express, { Application } from 'express';
import { Config } from './config';
import { AppRoutes } from './routes/app-routes';
import { ApiRoutes } from './routes/api-routes';
import { AccountRoutes } from './routes/account-routes';
import { JournalRoutes } from './routes/journal-routes';

const app: Application = express()

const config = new Config()
config.init(app)

const journalRoutes = new JournalRoutes()
journalRoutes.init()

const accountRoutes = new AccountRoutes()
accountRoutes.init()

const apiRoutes = new ApiRoutes()
apiRoutes.init()
apiRoutes.addRoute('/accounts', accountRoutes.router)
apiRoutes.addRoute('/journals', journalRoutes.router)

const appRoutes = new AppRoutes()
appRoutes.addRoute('/api', app, apiRoutes.router)

app.listen(3000, () => console.log("Listening... on port: 3000")
)