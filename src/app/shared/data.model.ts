export interface CourseSearchResultList {
  publicLearningPathResults: CourseSearchResult[]; // learning path = course
  count: number;
}

export interface CourseSearchResult {
  uuid: string;
  id: number;
  name: string;
  description: string;
  language: string;
  creationDate: string;
  modificationDate?: string;
  user?: User;
  publisher: Publisher;
  isPdf: boolean;
  coursewareTypeId: number;
  status: number;
  licence: string;
  images?: CourseImages;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface CourseImages {
  original: string;
  thumbnail: string;
  overview: string;
  digitalCover: string;
}

export interface DialogData{
  description: string;
}
