import { Component, Input } from '@angular/core';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
   }
   ngOnInit(): void {
     
  }
   ButtonName = "Show Course";
    Loginname:string="";

   addItem(value:any)
   {
     console.log("dsad");
     this.Loginname=value;
   }
}
