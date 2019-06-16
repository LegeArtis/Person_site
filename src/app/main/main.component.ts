import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ellipseImg = '../assets/images/main/Ellipse.svg';
  girlImg = '../assets/images/main/girl.png';
  borderImg = '../assets/images/main/border.svg';

  constructor() { }

  ngOnInit() {
  }

}
