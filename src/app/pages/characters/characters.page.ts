import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { CharacterController } from 'src/app/controller/characterController';
import { Character } from 'src/app/model/character';
import { StorageService } from 'src/app/services/storage.service';
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
    let alerParams: any = {};
    this.translate.get("CHAR_PAGE.ADD_ALERT.HEADER").subscribe((res: string) => {
      alerParams.header =  res;
    });
    this.translate.get("CHAR_PAGE.ADD_ALERT.TEXT").subscribe((res: string) => {
      alerParams.subHeader =  res;
    });
    this.translate.get("CHAR_PAGE.ADD_ALERT.NAME").subscribe((res: string) => {
      alerParams.inputs =  [
        {
          name: 'name1',
          placeholder: res,
        }
      ];
    });
    this.translate.get("CHAR_PAGE.ADD_ALERT.AGREE").subscribe((res: string) => {
      alerParams.buttons =  [{
        text: res,
        cssClass: 'secondary',
        handler: data => {
          if(CharacterController.isNameValid(data.name1)){
            this.app.characters.push(new Character(data.name1));
            this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters))
          }else{
            //not a valid name
            alerParams= {};
            this.translate.get("CHAR_PAGE.ADD_ALERT.NO_VALID_NAME").subscribe((res: string) => {
              alerParams.header =  res;
            });
            this.translate.get("CHAR_PAGE.ADD_ALERT.AGREE").subscribe((res: string) => {
              alerParams.buttons = [res];
            });
            alertController.create(alerParams).then(res => {
              res.present();
            });
          }
        }
      }];
    });
    this.translate.get("CHAR_PAGE.ADD_ALERT.CANCEL").subscribe((res: string) => {
      alerParams.buttons.push(res);
    });

    alertController.create(alerParams).then(res => {
      res.present();
    });
  }



  deleteCharacter(character: Character){
    let alerParams: any = {};
    this.translate.get("CHAR_PAGE.DELETE_ALERT.HEADER").subscribe((res: string) => {
      alerParams.header =  res;
    });
    this.translate.get("CHAR_PAGE.DELETE_ALERT.TEXT" , {
      character: character.getName()
    }).subscribe((res: string) => {
      alerParams.subHeader =  res;
    });
    this.translate.get("CHAR_PAGE.DELETE_ALERT.AGREE").subscribe((res: string) => {
      alerParams.buttons =  [{
        text: res,
        cssClass: 'secondary',
        handler: () => {
          const index = this.app.characters.indexOf(character);
          if (index > -1) {
            this.app.characters.splice(index, 1);
            this.app.storageService.set(DATABASE_NAME, JSON.stringify(this.app.characters));
          }
        }
      }];
    });
    this.translate.get("CHAR_PAGE.DELETE_ALERT.CANCEL").subscribe((res: string) => {
      alerParams.buttons.push(res);
    });

    alertController.create(alerParams).then(res => {
      res.present();
    });

  }

}
