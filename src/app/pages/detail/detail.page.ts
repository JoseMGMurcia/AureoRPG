import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private section : string = "1";

  private character: Character;
  private isReadonlyMode: boolean;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation().extras.state
    if (state) {
        this.character = state.character;
        this.isReadonlyMode = true;
    }
  }
  ngOnInit() {}

  sectionChanged(event: any) {
    this.section = event.detail.value;
  }
}
