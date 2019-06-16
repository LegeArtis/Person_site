import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuContactHelperService {
  private menuHidden = true;

  constructor() { }


  setMenuHidden(value: boolean) {
    this.menuHidden = value;
  }

  get isMenuHidden(): boolean {
    return this.menuHidden;
  }
}
