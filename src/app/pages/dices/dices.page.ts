import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.page.html',
  styleUrls: ['./dices.page.scss'],
})
export class DicesPage implements OnInit {

  data: any = {
    attribute: 5,
    skill: 3,
    modif: 0
  };
  constructor(private translate: TranslateService) {}

  ngOnInit() {
  }

  async rollDice(data: any){
 
    const rndInt = Math.floor(Math.random() * 10) + 1 + data.attribute + data.skill + data.modif; 
    let alerParams: any = {};
    this.translate.get("DICES_PAGE.ALERT.HEADER").subscribe((res: string) => {
      alerParams.header =  res;
    });
    this.translate.get("DICES_PAGE.ALERT.TEXT" , {
        attribute: data.attribute,
        skill: data.skill,
        modif: data.modif
      }).subscribe((res: string) => {
        alerParams.subHeader =  res;
      });
    this.translate.get("DICES_PAGE.ALERT.RESULT").subscribe((res: string) => {
      alerParams.message =  res.concat(rndInt.toString());
    });
    this.translate.get("DICES_PAGE.ALERT.AGREE").subscribe((res: string) => {
      alerParams.buttons =  [res];
    });
    const alert = await alertController.create(alerParams);

    await alert.present();
  }

}
