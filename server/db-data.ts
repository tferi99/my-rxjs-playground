import { WidgetTypeEnum } from '../src/app/grid/grid-api.service';
import { WacGridster } from '../src/app/grid/grid-api.service';


export let GRIDS: WacGridster = {
  widgets:
    [
      {
        x: 0,
        y: 0,
        rows: 1,
        cols: 3,
        widgetType: WidgetTypeEnum.CALL
      },
      {
        x: 0,
        y: 1,
        rows: 1,
        cols: 1,
        widgetType: WidgetTypeEnum.CALLLIST
      },
      {
        x: 2,
        y: 1,
        rows: 1,
        cols: 1,
        widgetType: WidgetTypeEnum.DIRECTORY
      }
    ]
};

export let INIT_RELOAD: any = {
  user: {
    userName: 'test user',
    device: 'test device'
  },
  gridster: GRIDS
};

export const COURSES = {
    0: {
        id: 0,
        description: 'Angular Ngrx Course',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.',
        category: 'BEGINNER',
        lessonsCount: 6,
        promo: true
    },
    1: {
        id: 1,
        description: 'Angular for Beginners',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
        category: 'BEGINNER',
        lessonsCount: 10,
        promo: false
    },
    2: {
        id: 2,
        description: 'Angular Security Course - Web Security Fundamentals',
        longDescription: 'Learn Web Security Fundamentals and apply them to defend an ' +
          'Angular / Node Application from multiple types of attacks.',
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        category: 'ADVANCED',
        lessonsCount: 11,
        promo: false
    },
};

export function findCourseById(courseId: number) {
  return COURSES[courseId];
}
export function setGrids(grids: WacGridster) {

  GRIDS.widgets = grids.widgets;
  // INIT_RELOAD.widget = GRIDS;
}




