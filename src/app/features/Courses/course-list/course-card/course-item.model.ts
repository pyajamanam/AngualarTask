export class CourseItem {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public creationDate: string,
      public duration: number,
      public authors: string[]
    ) {}
  }
  