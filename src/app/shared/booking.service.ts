import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ICreateBookings {
  title: string;
  description: string;
  service: string;
  category:string;
  date:string;
  time:string;
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor( private http:HttpClient) { }

  createBooking(credentials): Observable<any> {
    return this.http.post(`${environment.apiUrl}/booking/create`, credentials)
    .pipe(
      map((response: any) => {     
        return response;
      })
    );
  }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/categories`)
    .pipe(
      map((response: any) => {     
        return response;
      })
    );
  }

  getBookings(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/booking/view/user`)
    .pipe(
      map((response: any) => {     
        return response;
      })
    );
  }

  

}
