import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactObj: Contact;
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.contactObj = new Contact();
  }
  submit() {
    console.log(this.contactObj);
    
    this._appService.SendEmail(this.contactObj)
      .subscribe(result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      });
  }
}
export class Contact {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}
