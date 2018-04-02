import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edittip',
  templateUrl: './edittip.component.html',
  styleUrls: ['./edittip.component.css']
})
export class EdittipComponent implements OnInit {
  photo;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  GetPhoto() {
    this.photoService.GetAPhoto()
      .subscribe(resp => {
        console.log(resp);
        this.photo = resp;
      })
  }

}
