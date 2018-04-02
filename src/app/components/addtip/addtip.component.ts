import { TipService } from './../../services/tip.service';
import { Tip } from './../../models/tip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtip',
  templateUrl: './addtip.component.html',
  styleUrls: ['./addtip.component.css']
})
export class AddtipComponent implements OnInit {

  tips: Tip[];
  constructor(private tipService: TipService) { }

  ngOnInit() {
  }

  AddTip(bookie: HTMLInputElement, newPick: HTMLInputElement, oddValue: HTMLInputElement) {
    const obj = {
      user: 'gofs',
      sportsbook: bookie.value,
      pick: newPick.value,
      odd: oddValue.value,
      playAt: new Date(),
      voteCount: [0, 0]
    };
    this.tipService.AddTip(obj);
    bookie.value = "";
    newPick.value = "";
    oddValue.value = "";
  }

}
