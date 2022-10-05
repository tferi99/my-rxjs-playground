import * as express from 'express';
import {Application} from 'express';
import {getAllCourses, getCourseById, saveCourse} from './sample-crud';
import {getGrids, getHome, saveGrids, initReload} from './apas-server';

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
app.route(APAS_BASE_PATH + '/widget').get(getGrids);
app.route(APAS_BASE_PATH + '/widget').post(saveGrids);

app.route(APAS_BASE_PATH + '/init/reload').get(initReload);

const httpServer = app.listen(8080, () => {
    // console.log('Dummy APAS Server running at http://localhost:' + httpServer.address().port);
});
