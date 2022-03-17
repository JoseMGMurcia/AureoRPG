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
  constructor(
    app: AppComponent, 
    private translate: TranslateService) {
    this.app = app;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.characs = this.app.characters;
  }

  async addCharacter(){
    const alerParams: any = {
      header: await this.app.getText("CHAR_PAGE.ADD_ALERT.HEADER"),
      subHeader: await this.app.getText("CHAR_PAGE.ADD_ALERT.TEXT"),
      inputs: [{
        name: 'name1',
        placeholder: await this.app.getText("CHAR_PAGE.ADD_ALERT.NAME")
      }],
      buttons: [{
          text: await this.app.getText("CHAR_PAGE.ADD_ALERT.AGREE"),
          cssClass: 'secondary',
          handler: async data => {
            if( CharacterController.isNameValid(data.name1) ){
              this.app.characters.push(new Character(data.name1));
              this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters))
            }else{
              // Not a valid name
              const alerNotValidParams: any= {
                header: await this.app.getText("CHAR_PAGE.ADD_ALERT.NO_VALID_NAME"),
                buttons: [await this.app.getText("CHAR_PAGE.ADD_ALERT.AGREE")]
              };
              alertController.create(alerNotValidParams).then(res => {
                res.present();
              });
            }
          }
        },
        await this.app.getText("CHAR_PAGE.ADD_ALERT.CANCEL")
      ]
    };
    alertController.create(alerParams).then(res => {
      res.present();
    });
  }

  async deleteCharacter(character: Character){
    const alerParams: any = {
    header: await this.app.getText("CHAR_PAGE.DELETE_ALERT.HEADER"),
    subHeader: await this.app.getText("CHAR_PAGE.DELETE_ALERT.TEXT", { character: character.getName() }),
    buttons: [{
      text: await this.app.getText("CHAR_PAGE.DELETE_ALERT.AGREE"),
      cssClass: 'secondary',
      handler: () => {
        const index = this.app.characters.indexOf(character);
        if (index > -1) {
          this.app.characters.splice(index, 1);
          this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters));
        }
      }
    }, await this.app.getText("CHAR_PAGE.DELETE_ALERT.CANCEL")
    ]};
    alertController.create(alerParams).then(res => {
      res.present();
    });
  }
}
