export enum Category {
  Beginner = 'BEGINNER',
  Advanced = 'ADVANCED'
}

export interface Course {
  id: number;
  description: string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category: Category;
  lessonsCount: number;
  promo: boolean;
}


