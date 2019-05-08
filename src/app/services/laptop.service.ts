import { Injectable, OnInit } from '@angular/core';
import { Laptop } from '../components/laptops/models/laptop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'node_modules/rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LaptopService implements OnInit{
  laptops: Laptop[];
  laptopUrl: string = "http://localhost:8111/laptops";

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
  getLaptops(): Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.laptopUrl);
  }
}


