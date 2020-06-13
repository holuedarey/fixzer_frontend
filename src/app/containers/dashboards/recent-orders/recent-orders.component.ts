import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/shared/booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html'
})
export class RecentOrdersComponent implements OnInit {

  constructor(private booking: BookingService, private router:Router) { }

  // data: IProduct[] = productItems.slice(0, 6);
  data: any[] = [];
  ngOnInit() {
    // this.getBookings();
    this.displayBooking();
  }

  displayBooking() {
    //get user type admin or ordinary  user
    let user = localStorage.getItem('User');
    user = JSON.parse(user).position;
    if(user == 'customer'){
      this.getBookingUser();
    }else if(user == 'freelancer'){
      //get assign user for the profession
    }
    else if(user == 'super_admin'){
      this.getBookings();
    }
  }
  goToDetails(details){
    this.router.navigate(['/app/pages/product/details'], {state:details})
    console.log('details : ', details)
  }
  getBookings() {
    this.booking.getBookings().subscribe((bookings) => {
      // console.log(bookings.data)
      this.data = bookings.data
    }, (error) => {
      console.log(error.message)
    });
  }

  getBookingUser() {
    this.booking.getBookingUser().subscribe((bookings) => {
      // console.log(bookings.data)
      this.data = bookings.data
    }, (error) => {
      console.log(error.message)
    });
  }

}
