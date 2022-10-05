import {Request, Response} from 'express';
import {COURSES} from './db-data';

export function getAllCourses(req: Request, res: Response) {

    res.status(200).json({payload:Object.values(COURSES)});

}

export function getCourseById(req: Request, res: Response) {

    const courseId = req.params['id'];

    const courses = Object.values(COURSES);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}

export function saveCourse(req: Request, res: Response) {

  const id = req.params['id'];
  const changes = req.body;

  COURSES[id] = {
    ...COURSES[id],
    ...changes
  };

  res.status(200).json(COURSES[id]);
}

