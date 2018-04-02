import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.GetArticles()
      .subscribe(resp => {
        console.log(resp);
        this.articles = resp;
      })
  }
  GetNews() {
    this.newsService.GetSources()
      .subscribe(resp => {
        console.log(resp);
      })
  }
}
