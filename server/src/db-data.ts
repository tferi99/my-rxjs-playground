import { Category, Course } from './model';

export let INIT_RELOAD: any = {
  user: {
    userName: 'test user',
    device: 'test device'
  },
};

export const COURSES: Course[] = [
    {
        id: 0,
        description: 'Angular Ngrx Course',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
        category: Category.Beginner,
        lessonsCount: 6,
        promo: true
    },
    {
        id: 1,
        description: 'Angular for Beginners',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
        category: Category.Beginner,
        lessonsCount: 10,
        promo: false
    },
    {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: 'Learn Web Security Fundamentals and apply them to defend an ' +
          'Angular / Node Application from multiple types of attacks.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        category: Category.Advanced,
        lessonsCount: 11,
        promo: false
    },
];

export function findCourseById(courseId: number): Course {
  return COURSES.find(c => c.id === courseId);
}
