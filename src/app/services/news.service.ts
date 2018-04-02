import { Article } from './../models/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService {
  apikey: string = "dde5d3e1b688445c90457de8df12bc81";
  articles;
  artcl: Article[] = [
    {
      source: {
        id: null,
        name: "Thingiverse.com"
      },
      author: "bravoman",
      title: "Bitcoin",
      description: "My rendition of what a physical bitcoin would look like. Part of a series of various crypto-currencies my friends introduced to me.",
      url: "https://www.thingiverse.com/thing:2813724",
      urlToImage: "https://www.thingiverse.com/img/thingiverse-avatar-4_3.png",
      publishedAt: "2018-03-03T22:00:54Z"
    }
  ];
  constructor(private http: HttpClient) { }

  GetArticles() {
    return this.http.get('https://newsapi.org/v2/everything?q=liverpool&language=en&from=2018-03-10&apiKey=' + this.apikey);
  }
  GetSources() {
    return this.http.get('https://newsapi.org/v2/sources?category=sports&apiKey=' + this.apikey);
  }
}
