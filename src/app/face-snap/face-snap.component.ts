import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;

  snapBtnTxt!: string;
  isSnapped!: boolean;
  
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {

    this.snapBtnTxt = 'Add Snap!';
    this.isSnapped = false;
  }

  onClickSnapButton (){
      if (this.snapBtnTxt === 'Oh Snap!') {
          this.faceSnapsService.addOrRemoveSnapById(this.faceSnap.id, 'add');
          this.snapBtnTxt = 'Oops, unSnap!';
      } else {
        this.faceSnapsService.addOrRemoveSnapById(this.faceSnap.id, 'remove');
          this.snapBtnTxt = 'Oh Snap!';
    }
  }

}
