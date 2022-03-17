import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { CharacterController } from 'src/app/controller/characterController';
import { Character } from 'src/app/model/character';
import { DATABASE_NAME } from 'src/app/const';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characs: Character[];
  app : AppComponent;
  private ts: TranslateService
  constructor(app: AppComponent) {
    this.app = app;
    this.ts = app.translate;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.characs = this.app.characters;
  }

  addCharacter(){
    const alerParams: any = {
      header: this.ts.instant("CHAR_PAGE.ADD_ALERT.HEADER") ,
      subHeader: this.ts.instant("CHAR_PAGE.ADD_ALERT.TEXT"),
      inputs: [{
        name: 'name1',
        placeholder: this.ts.instant("CHAR_PAGE.ADD_ALERT.NAME")
      }],
      buttons: [{
          text: this.ts.instant("CHAR_PAGE.ADD_ALERT.AGREE"),
          cssClass: 'secondary',
          handler: data => {
            if( CharacterController.isNameValid(data.name1) ){
              this.app.characters.push(new Character(data.name1));
              this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters));
            }else{
              // Not a valid name
              const alerNotValidParams: any= {
                header: this.ts.instant("CHAR_PAGE.ADD_ALERT.NO_VALID_NAME"),
                buttons: [ this.ts.instant("CHAR_PAGE.ADD_ALERT.AGREE") ]
              };
              alertController.create(alerNotValidParams).then(res => {
                res.present();
              });
            }
          }
        }, this.ts.instant("CHAR_PAGE.ADD_ALERT.CANCEL")
      ]
    };
    alertController.create(alerParams).then(alert => {
      alert.present();
    });
  }

  deleteCharacter(character: Character){
    const alerParams: any = {
      header: this.ts.instant("CHAR_PAGE.DELETE_ALERT.HEADER"),
      subHeader: this.ts.instant("CHAR_PAGE.DELETE_ALERT.TEXT", { character: character.getName() }),
      buttons: [{
        text: this.ts.instant("CHAR_PAGE.DELETE_ALERT.AGREE"),
        cssClass: 'secondary',
        handler: () => {
          const index = this.app.characters.indexOf(character);
          if (index > -1) {
            this.app.characters.splice(index, 1);
            this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters));
          }
        }
      }, this.ts.instant("CHAR_PAGE.DELETE_ALERT.CANCEL")]
    };
    alertController.create(alerParams).then(alert => {
      alert.present();
    });
  }
}
