export class CourseCard {
   id:number ;
   title: string;
   description: string;
   creationDate: Date;
   duration: number;
   authors: string[];
   
   constructor(id: number,
    title:string,
     description: string,
     creationDate:Date,
     duration:number,
     authors:string[]) {
        this.id = id;
        this.title= title;
        this.description = description;
        this.creationDate = creationDate;
        this.duration=duration;
        this.authors= authors;
  }
  
}
