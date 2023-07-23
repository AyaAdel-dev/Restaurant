import { Component } from '@angular/core';

@Component({
  selector: 'app-main-landing-content',
  templateUrl: './main-landing-content.component.html',
  styleUrls: ['./main-landing-content.component.css']
})
export class MainLandingContentComponent {
  public loggedInAsUser = localStorage.getItem('loggedInAsUser') === 'true';
  public loggedInAsAdmin = localStorage.getItem('loggedInAsAdmin') === 'true';

  constructor() {}

}