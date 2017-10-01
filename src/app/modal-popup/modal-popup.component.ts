import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'confirm',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {

  title: string;
  message: string;
  accesscode:string;
  errormsg:string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }
confirm() {
      // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    if(this.accesscode === "MyCode"){
    this.result = true;
    this.close();
    }
  else if(this.accesscode === "test"){
     this.result = false;
    this.close();
  }
    else {
    this.errormsg="Invalid code entered.";
    }
    
  }
}
