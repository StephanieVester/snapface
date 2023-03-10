import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;

  snapBtnTxt!: string;
  isSnapped!: boolean;
  
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {}

  ngOnInit() {

    this.snapBtnTxt = 'Add Snap!';
    this.isSnapped = false;
  }

  onViewSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  // onClickSnapButton (){
  //     if (this.snapBtnTxt === 'Oh Snap!') {
  //         this.faceSnapsService.addOrRemoveSnapById(this.faceSnap.id, 'add');
  //         this.snapBtnTxt = 'Oops, unSnap!';
  //     } else {
  //       this.faceSnapsService.addOrRemoveSnapById(this.faceSnap.id, 'remove');
  //         this.snapBtnTxt = 'Oh Snap!';
  //   }
  // }

}
