import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'single-app-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input () faceSnap!: FaceSnap;

  snapBtnTxt!: string;
  isSnapped!: boolean;
  
  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.snapBtnTxt = 'Add Snap!';
    this.isSnapped = false;
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getSnapById(snapId);
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
