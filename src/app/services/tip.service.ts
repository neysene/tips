import { Tip } from './../models/tip';
import { Injectable } from '@angular/core';

@Injectable()
export class TipService {
  tips: Tip[] = [
    {
      user: 'gofs',
      sportsbook: 'Pinnacle',
      pick: 'Liverpool to win',
      odd: 1.75,
      playAt: new Date(),
      voteCount: [5, 2],
      tags: ["liverpool", "stoke city", "premier league", "liverpool", "stoke city", "premier league", "liverpool", "stoke city", "premier league"]
    },
    {
      user: 'gofs',
      sportsbook: '5Dimes',
      pick: 'PSG to win',
      odd: 2.85,
      playAt: new Date(),
      voteCount: [3, 6],
      tags: ["psg", "caen", "league 1"]
    }
  ];

  constructor() { }

  GetTips() {
    return this.tips;
  }

  AddTip(obj) {
    this.tips.push(obj);
  }

  EditTip(tip: Tip) {
    tip.voteCount[0] += 1;
  }

  RemoveTip(tip: Tip) {
    const index = this.tips.indexOf(tip);
    this.tips.splice(index, 1)
  }

  UpdateVoteCount(tip: Tip, indice: number) {
    tip.voteCount[indice] += 1;
  }

}
