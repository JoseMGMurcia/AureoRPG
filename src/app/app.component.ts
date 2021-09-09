import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { AVALIABLE_LANGUAJES } from '../const';
import { Character } from 'src/model/character';
import { Router, UrlTree } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

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
  public characters = [new Character('Ejemplasio'), new Character('Demostracio') ]
  constructor(
    private translate: TranslateService, 
    private navCtrl: NavController,
    private router: Router
  ) {
    this.initializeApp();
  }
  
  changelanguage(language: string){
    if( AVALIABLE_LANGUAJES.includes(language) ){
      this.translate.setDefaultLang( language );
    }
  }
  
  initializeApp() {
    const devideLanguaje = window.navigator.language.substring(0,2).toLowerCase();
    if( AVALIABLE_LANGUAJES.includes(devideLanguaje) ){
      this.translate.setDefaultLang( devideLanguaje );
    }else{
      this.translate.setDefaultLang('en');
    }
  }

  navigateToDetail(character: Character){
    const params = {
      character
    };
    if(this.router.url.substring(0,7) == '/detail') {
      this.navCtrl.pop().then(() => {
        this.navCtrl.navigateForward('detail' , { state: params} );
      });
    }else{
      this.navCtrl.navigateForward('detail' , { state: params} );
    }
  }
}
