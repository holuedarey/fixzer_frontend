import { Component, OnInit } from '@angular/core';
import { carouselImages, carouselThumbs, ICarouselImage } from 'src/app/data/carousels';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  detailImages: ICarouselImage[] = carouselImages;
  detailThumbs: ICarouselImage[] = carouselThumbs;
  data:any;
  constructor() {
    this.data = history.state;
    console.log('push data', this.data)
  } 

  ngOnInit() {
  }

}
