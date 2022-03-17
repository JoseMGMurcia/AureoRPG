import { Component, OnInit } from '@angular/core';
import { URL_AUREO } from 'src/app/const';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
  }
  constructor() { }

  onClickMore(){
    console.log("Opening");
    window.open(URL_AUREO, '_system');
  }

}
