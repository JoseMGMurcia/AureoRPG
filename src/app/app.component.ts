import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/home', icon: 'home' },
    { title: 'CHARACTERS', url: '/characters', icon: 'people' },
    { title: 'WIKI', url: '/wiki', icon: 'book' },
    { title: 'DICE_SET', url: '/dices', icon: 'dice' },
    { title: 'INFO', url: '/info', icon: 'information-circle' }
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
