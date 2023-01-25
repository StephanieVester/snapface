import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapBtnTxt!: string;
  isSnapped!: boolean;
  
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Un ami de toujours';
    this.createdDate = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snapBtnTxt = 'Add Snap!';
    this.isSnapped = false;
  }

  onClickSnapButton (){
    if(this.isSnapped === false){
      this.snaps++;
      this.isSnapped = true;
      this.snapBtnTxt = 'Snapped! Remove Snap';
    } else {
      this.snaps--;
      this.isSnapped = false;
      this.snapBtnTxt = 'Add Snap!';
    }

  }

}
