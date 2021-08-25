import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/folder/HOME', icon: 'home' },
    { title: 'CHARACTERS', url: '/folder/CHARACTERS', icon: 'people' },
    { title: 'WIKI', url: '/folder/WIKI', icon: 'book' },
    { title: 'DICE_SET', url: '/folder/DICE_SET', icon: 'dice' },
    { title: 'INFO', url: '/folder/INFO', icon: 'information-circle' }
  ];
  public characters = ['Pj1', 'Pj2' ]
  constructor(
    private translate: TranslateService 
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.translate.setDefaultLang('es'); 
  }
}
