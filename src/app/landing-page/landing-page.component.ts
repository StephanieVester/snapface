import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent  {

  userEmail!: string;

  constructor(private router: Router) { }

  goToRoute(path: string):void{
    this.router.navigateByUrl(path);
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
