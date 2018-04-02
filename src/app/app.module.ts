import { PhotoService } from './services/photo.service';
import { TipService } from './services/tip.service';
import { NewsService } from './services/news.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WallComponent } from './components/wall/wall.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EdittipComponent } from './components/edittip/edittip.component';
import { AddtipComponent } from './components/addtip/addtip.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NewsComponent } from './components/news/news.component';

const routeConfig: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddtipComponent
  },
  {
    path: 'edit',
    component: EdittipComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    HomeComponent,
    AboutComponent,
    EdittipComponent,
    AddtipComponent,
    NotfoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    HttpClientModule
  ],
  providers: [TipService, PhotoService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
