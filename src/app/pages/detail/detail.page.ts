import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  character: Character;

constructor(private router: Router) {
  const state = this.router.getCurrentNavigation().extras.state
  if (state) {
      this.character = state.character;
      console.log(this.character.getName());
  }
}
  ngOnInit() {}
}
