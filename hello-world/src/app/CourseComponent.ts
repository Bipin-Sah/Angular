import {Component} from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector : 'courses',
  template :` <h2> {{title}}</h2>
              <img [src]=" imageUrl " />
              <table>
                <tr><td [attr.colspan]= "colSpan"></td></tr>
              </table>
              <button class="btn btn-primary" [class.active]= "isActive">Save</button> 
              <button [style.backgroundColor]="isActive ? 'LightBlue' : 'white'"> StyleBinding</button>
              <div (click)="onDivClicked()">
              <button (click)= "onSave($event)">Save</button>
              </div>
              <input (keyup.enter) ="onKeyUp()" />
              <input (keyup.enter)="onKey($event)" />
              <input #email (keyup.enter)="onkeyPress(email.value)" />
              <input [value]="email1" (keyup.enter)="email1 = $event.target.value; onKeyBinding()" />
              <input [(ngModel)]="email2" (keyup.enter)="onKeyTWBinding()" />

              `
            })

export class CourseComponent{

  title= "List of Courses";
  imageUrl = "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png";//properties Binding
  colSpan = 2;   //Dom binding
  isActive = true; // Class binding and style binding
  email1 = "me@example.com";
  email2 = "me@example2.com";
  onDivClicked(){
    console.log('div was clicked');
  }
  onSave($event){
   // $event.stopPropagation();
    console.log('Button was clicked', $event);
  }
  onKeyUp(){
    console.log('Enter was pressed');
  }
  onKey($event){
    console.log($event.target.value);
  }
  onkeyPress(email){
    console.log(email);
  }
  onKeyBinding(){
    console.log(this.email1);
  }
  onKeyTWBinding(){
    console.log(this.email2)
  }
}
