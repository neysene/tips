import { TipService } from './../../services/tip.service';
import { Tip } from './../../models/tip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  tips: Tip[];
  constructor(private tipService: TipService) { }

  ngOnInit() {
    this.tips = this.tipService.GetTips();
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

  RemoveTip(tip: Tip) {
    this.tipService.RemoveTip(tip);
  }

  UpdateVoteCount(tip: Tip, indice: number) {
    this.tipService.UpdateVoteCount(tip, indice);
  }

}
