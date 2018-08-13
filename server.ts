import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
// import * as cors from 'cors';

// Faster server renders w/ Prod mode
enableProdMode();

// Express server
const app = express();
// const router = express.Router();

const PORT = process.env.PORT || 8080;
const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// const options: cors.CorsOptions = {
//   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
//   credentials: false,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: 'http://52.72.55.178:8080',
//   preflightContinue: true
// };

// router.use(cors(options));
// router.options('*', cors(options));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on port:${PORT}`);
});
