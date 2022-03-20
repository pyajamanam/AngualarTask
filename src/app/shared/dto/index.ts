export * as COURSES from './courses';

export interface IdName {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: number;
  creationDate: string;
  authors: string[];
}

export interface Credentials {
  email: string;
  password: string;
}

export interface User extends Credentials {
  name: string;
}
