import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expand(){
    document.getElementById('dropdownbtn').classList.toggle('tap');
  }
  title = 'Blockchainwebsite';
}
