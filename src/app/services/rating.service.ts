import { Injectable, OnInit } from '@angular/core';
import { Laptop } from '../components/laptops/models/laptop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RatingService implements OnInit{
  

  currentlaptopId: number;
  currentRating: number;
  laptopUrl: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // this.laptops = [
    //   {
    //     vendor: 'HP',
    //     model: '14q-CS0005TU',
    //     os: 'Windows 10 Home',
    //     processor:{
    //       type: 'Intel Core i3',
    //       generation: '7th Gen'
    //     },
    //     ram: {
    //       size: 4,
    //       measure: 'GB DDR4'
    //     },
    //     hdd: {
    //         size: 1,
    //         measure: 'TB'
    //     },
    //     display: {
    //         size: 14,
    //         measure: 'inch' 
    //     },
    //     price:{
    //         rate: 28990,
    //         currency: 'INR'
    //     },
    //     image: 'http://lorempixel.com/300/200/technics/3/',
    //     hide: false
    //   },
    //   {
    //     vendor: 'Acer',
    //     model: 'Predator Helios',
    //     os: 'Windows 10 Home',
    //     processor:{
    //       type: 'Intel Core i8',
    //       generation: '8th Gen'
    //     },
    //     ram: {
    //       size: 8,
    //       measure: 'GB DDR4'
    //     },
    //     hdd: {
    //         size: 1,
    //         measure: 'TB'
    //     },
    //     display: {
    //         size: 15.6,
    //         measure: 'inch' 
    //     },
    //     price:{
    //         rate: 62990,
    //         currency: 'INR'
    //     },
    //     image: 'http://lorempixel.com/300/200/technics/3/',
    //     hide: false
    //   },
    //   {
    //     vendor: 'Dell',
    //     model: 'Vosto 15 3000',
    //     os: 'Linux/Ubuntu',
    //     processor:{
    //       type: 'Intel Celeron',
    //       generation: 'Dual Core'
    //     },
    //     ram: {
    //       size: 4,
    //       measure: 'GB DDR4'
    //     },
    //     hdd: {
    //         size: 500,
    //         measure: 'GB'
    //     },
    //     display: {
    //         size: 15.6,
    //         measure: 'inch' 
    //     },
    //     price:{
    //         rate: 22990,
    //         currency: 'INR'
    //     },
    //     image: 'http://lorempixel.com/300/200/technics/3/',
    //     hide: false
    //   }
  // ];
  }
  getRatings(laptopId:number, rating:number): Observable<any>{
    console.log("inside getRatings "+laptopId);
    this.currentlaptopId = laptopId;
    this.currentRating = rating;
    this.laptopUrl = "http://localhost:8111/anonymous/customer/laptop/"+laptopId+"/rating/"+rating;
    console.log("this.laptopUrl: "+this.laptopUrl);
    return this.http.get<any>(this.laptopUrl);
  }

  getAverageRating(laptopId:number): Observable<any>{
    console.log("inside getAverageRating "+laptopId);
    this.laptopUrl = "http://localhost:8111/average/rating/laptop/"+laptopId;
    console.log("avg this.laptopUrl: "+this.laptopUrl);
    return this.http.get<any>(this.laptopUrl);
  }
}


