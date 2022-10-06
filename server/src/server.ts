import express, { Express, Request, Response } from 'express';
import {Application} from 'express';
import {getAllCourses, getCourseById, saveCourse} from './sample-crud';
import {getHome, initReload} from './apas-server';

const bodyParser = require('body-parser');
const app: Application = express();

const APAS_BASE_PATH = '/andphone/webattendant';

app.use(bodyParser.json());

// sample
app.route('/api/courses').get(getAllCourses);
app.route('/api/courses/:id').put(saveCourse);
app.route('/api/courses/:id').get(getCourseById);

// APAS
app.route('/').get(getHome);

app.route(APAS_BASE_PATH + '/init/reload').get(initReload);

const httpServer = app.listen(8081, () => {
    const address = httpServer.address();
    console.log('Server is running at http://localhost:' + address['port']);
});
