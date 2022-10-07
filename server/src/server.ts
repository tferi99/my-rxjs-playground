import express, { Application } from 'express';
import { getAllCourses, getCourseById, saveCourse, searchCourses } from './sample-crud';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

// courses
app.route('/api/course').get(getAllCourses);
app.route('/api/course/:id').get(getCourseById);
app.route('/api/course/search/:term').get(searchCourses);
app.route('/api/course/:id').put(saveCourse);



const httpServer = app.listen(8081, () => {
    const address = httpServer.address();
    console.log('Server is running at http://localhost:' + address['port']);
});
