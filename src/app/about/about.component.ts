import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 skills:Skills[];
  constructor() { }

  ngOnInit() {
    this.skills=[
      {Technology:"MVC", Level:"90%"},
      {Technology:"C#", Level:"85%"},
      {Technology:"Asp.Net", Level:"80%"},
      {Technology:"Asp.Net Web Api", Level:"80% "},
      {Technology:"Asp.Net Core", Level:"70%"},
      {Technology:"JQuery", Level:"85%"},
      {Technology:"Angular 4", Level:"75%"},
      {Technology:"CSS", Level:"85%"},
      {Technology:"SQL", Level:"80%"},
      {Technology:"LINQ", Level:"75%"},
      {Technology:"Entity Framework", Level:"70%"},
    ];
  }

}

class Skills{
  public Technology:string;
  public Level:string;
}
