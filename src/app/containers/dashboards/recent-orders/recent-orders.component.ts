import { Component, OnInit } from '@angular/core';
import productItems from 'src/app/data/products';
import { IProduct } from 'src/app/data/api.service';
import { BookingService } from 'src/app/shared/booking.service';
import data from 'src/app/data/products';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent implements OnInit {

  constructor(private booking:BookingService) { }

  // data: IProduct[] = productItems.slice(0, 6);
  data:any[] = [];
  ngOnInit() {
    this.getBookings();
  }

  getBookings(){
    this.booking.getBookings().subscribe((bookings) => {
      // console.log(bookings.data)
      this.data = bookings.data
    }, (error) => {
      console.log(error.message)
    });
  }

  

}
