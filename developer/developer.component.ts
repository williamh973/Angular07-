import { Component } from '@angular/core';
import { Dev } from "../models/dev.model";
import { Skill } from "../models/skill.model";


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {
 


  variableDeveloper: Dev = new Dev(
    "William", 
    "Hattier", 
    31, 
    "Masculin", 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
   [
    new Skill ( "angular",  "", "my site",),
    new Skill ( "javascript",  "angular", "my site",)
    ]
  )

  }
