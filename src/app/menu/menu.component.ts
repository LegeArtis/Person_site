import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  private _exitImg = '../assets/images/menu/Exit.svg';
  private _fbImg = '../assets/images/menu/FB.svg';
  private _vkImg = '../assets/images/menu/VK.svg';
  private _instagramImg = '../assets/images/menu/Inst.svg';
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
        count -= 0.1;
      }
    }, 14);
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
    }, 14);
  }

  ngOnInit(): void {
  }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  get exitImg(): string {
    return this._exitImg;
  }

  get fbImg(): string {
    return this._fbImg;
  }

  get vkImg(): string {
    return this._vkImg;
  }

  get instagramImg(): string {
    return this._instagramImg;
  }
}
