import {Request, Response} from 'express';
import {COURSES} from './db-data';
import { Course } from './model';

export function getAllCourses(req: Request, res: Response) {
    res.status(200).json(COURSES);
}

export function getCourseById(req: Request, res: Response) {
    const courseId = Number(req.params['id']);
    const course = COURSES.find(course => course.id == courseId);
    res.status(200).json(course);
}

export function searchCourses(req: Request, res: Response) {
    const term = req.params['term'];
    const courses: Course[] = COURSES.filter(course => course.description.toLowerCase().indexOf(term.toLowerCase()) >= 0);
    res.status(200).json(courses);
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

