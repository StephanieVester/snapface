import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;

  snapBtnTxt!: string;
  isSnapped!: boolean;
  
  ngOnInit() {

    this.snapBtnTxt = 'Add Snap!';
    this.isSnapped = false;
  }

  onClickSnapButton (){
    if(this.isSnapped === false){
      this.faceSnap.snaps++;
      this.isSnapped = true;
      this.snapBtnTxt = 'Snapped! Remove Snap';
    } else {
      this.faceSnap.snaps--;
      this.isSnapped = false;
      this.snapBtnTxt = 'Add Snap!';
    }

  }

}
