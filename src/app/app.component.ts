import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { AVALIABLE_LANGUAJES, DATABASE_NAME } from './const';
import { Character } from 'src/app/model/character';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { StorageService } from './services/storage.service';
import { CharacterController } from 'src/app/controller/characterController';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'HOME',        url: '/home',       icon: 'home' },
    { title: 'CHARACTERS',  url: '/characters', icon: 'people' },
    { title: 'WIKI',        url: '/wiki',       icon: 'book' },
    { title: 'DICE_SET',    url: '/dices',      icon: 'dice' },
    { title: 'INFO',        url: '/info',       icon: 'information-circle' }
  ];
  public characters: Character[];

  constructor(
    private translate: TranslateService, 
    private navCtrl: NavController,
    private router: Router,
    public storageService: StorageService
  ) {
    this.initializeApp();
  }
  
  changelanguage(language: string){
    if( AVALIABLE_LANGUAJES.includes(language) ){
      this.translate.setDefaultLang( language );
    }
  }
  
  async initializeApp() {
    const devideLanguaje = window.navigator.language.substring(0,2).toLowerCase();
    if( AVALIABLE_LANGUAJES.includes(devideLanguaje) ){
      this.translate.setDefaultLang( devideLanguaje );
    }else{
      this.translate.setDefaultLang('en');
    }
    let protoCharacters = JSON.parse( await this.storageService.get(DATABASE_NAME) );
    this.characters = CharacterController.converToCharacters(protoCharacters);
    console.log(this.characters);
    
  }

  navigateToDetail(character: Character){
    const params = { character };
    if(this.router.url.substring(0,7) == '/detail') {
      this.navCtrl.pop().then(() => {
        this.navCtrl.navigateForward('detail' , { state: params} );
      });
    }else{
      this.navCtrl.navigateForward('detail' , { state: params} );
    }
  }
}
