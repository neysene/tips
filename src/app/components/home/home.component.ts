import { TipService } from './../../services/tip.service';
import { Tip } from './../../models/tip';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tips: Tip[];
  constructor(private tipService: TipService) { }

  ngOnInit() {
    this.tips = this.tipService.GetTips();
  }

  EditTip(tip: Tip) {
    this.tipService.EditTip(tip);
  }

  RemoveTip(tip: Tip) {
    this.tipService.RemoveTip(tip);
  }

  UpdateVoteCount(tip: Tip, indice: number) {
    this.tipService.UpdateVoteCount(tip, indice);
  }
}
