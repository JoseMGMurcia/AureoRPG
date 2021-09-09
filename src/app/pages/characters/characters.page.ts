import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Character } from 'src/model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characs: Character[];
  app : AppComponent;
  constructor(app: AppComponent) {
    this.app = app;
    this.characs = app.characters;
    
  }

  ngOnInit() {
  }

  deleteCharacter(character: Character){
    console.log("DELETING");
    //make popup
  }

}
