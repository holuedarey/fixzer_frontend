import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from 'src/app/shared/booking.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-quick-post',
  templateUrl: './quick-post.component.html'
})
export class QuickPostComponent implements OnInit {
  @ViewChild('bookingForm') bookingForm: NgForm;
  emailModel = '';
  passwordModel = '';
  basicTime = new Date();
  bsValue = new Date();


  buttonDisabled = false;
  buttonState = '';

  categories = [
    { label: 'Cakes', value: 'chocolate' },
    { label: 'Cupcakes', value: 'vanilla' },
    { label: 'Desserts', value: 'strawberry' }
  ];

  constructor(private bookingService: BookingService, private notifications: NotificationsService, ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.bookingService.getCategories().subscribe((response) => {
      let cat = {}
      this.categories = response.data.map(item => {
        // console.log(item.title)
        return cat = { label: item.title, value: item.title }
      });
      // console.log('categorys', this.categories)

    }, (error) => {
      this.categories = [
        { label: 'Cakes', value: 'chocolate' },
        { label: 'Cupcakes', value: 'vanilla' },
        { label: 'Desserts', value: 'strawberry' }
      ];
    });
  }
  onSubmit() {
    if (!this.bookingForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.bookingService.createBooking(this.bookingForm.value).subscribe((response) => {
      this.buttonDisabled = false;
      // console.log(response);
      this.bookingForm.resetForm();

      this.basicTime = new Date();
      this.bsValue = new Date();
      this.notifications.create('Success', response.message, NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: true });
    }, (error) => {
      this.buttonDisabled = false;
      this.buttonState = '';
      this.notifications.create('Error', error.message, NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
    });
  }

}
