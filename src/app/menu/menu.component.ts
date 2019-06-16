import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private exitImg = '../assets/images/Exit.svg';
  private fbImg = '../assets/images/FB.svg';
  private vkImg = '../assets/images/VK.svg';
  private instagramImg = '../assets/images/Inst.svg';
  private _isOpen = true;


  constructor() {
  }

  public exitMenu() {
    let count = 1, inter;

    inter = setInterval(() => {
      if (count <= 0) {
        clearInterval(inter);
        this.isOpen = true;
        document.getElementById('open_menu').style.opacity = `1`;
      } else {
        document.getElementById('open_menu').style.opacity = `${count}`;
        count -= 0.2;
      }
    }, 100);
  }

  public openMenu() {
    let count = 0, inter;
    document.getElementById('open_menu').style.width = `${count}px`;
    this.isOpen = false;

    inter = setInterval(() => {
      if (count > 250) {
        clearInterval(inter);
      } else {
        document.getElementById('open_menu').style.width = `${count}px`;
        count += 10;
      }
    }, 20);
  }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  ngOnInit(): void {
  }
}
