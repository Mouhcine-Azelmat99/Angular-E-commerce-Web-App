import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  textInput : string ="some text";

  onSubmit(i : HTMLInputElement){
    this.textInput = i.value;
    console.log(i.value);
  }
}
