import { Component, OnInit, EventEmitter } from '@angular/core';
import { Laptop } from './models/Laptop';
import { Rating } from './models/Rating';
import {LaptopService} from '../../services/laptop.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { RatingService } from 'src/app/services/rating.service';
// import { Input, EventEmitter, OnChanges } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  laptops: Laptop[];
  rating: Rating;
  loaded: boolean = true;
  closeResult: string;
  rateControl: FormControl;
  selectedlaptopId: number;
  seletedRrating: number;
  currentRate: number = 0;
  // @Output() public onComplete: EventEmitter<any> = new EventEmitter();
  // @Input() completedParam;

  constructor(private laptopService: LaptopService, private modalService: NgbModal, private ratingService: RatingService) { }

  ngOnInit() {
    console.log('Init........');
     this.laptopService.getLaptops().subscribe(
       laptops => {
         this.laptops = laptops;
       }
     );
  }

  // runOnComplete(): void {
  //   this.onComplete.emit(this.completedParam);
  // }

  loadAverageRating(laptopId){
    console.log('loadAverageRating........'+laptopId);
    // setTimeout(() => {
     this.ratingService.getAverageRating(laptopId).subscribe(
        rating => {
          this.rating = rating;
          console.log(rating);
        return this.currentRate=rating.averageRating;
        }
     );
    // },2000);
}
  open(content, laptopId) {
    console.log("laptop id: "+laptopId);
    this.selectedlaptopId = laptopId;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //console.log("laptop id: "+laptopId);
      this.closeResult = `Closed with: ${result}`;
     
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //alert('Open Pop-up');
  }

  saveRating(rating:number){
    console.log("rating..... "+rating)
    this.seletedRrating = rating;
    this.ratingService.getRatings(this.selectedlaptopId, this.seletedRrating).subscribe(
      // laptops => {
      //   this.laptops = laptops;
      // }
      //modal.close('Save click')
      
    );
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    
    return true;

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
