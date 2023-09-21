import { Component } from '@angular/core';
import { fa0 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isTrue:boolean=false;
  isTruee(){
    this.isTrue=true;
  }
}
