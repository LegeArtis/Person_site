import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private _isOpen = true;

  public closeContact() {
    this.isOpen = true;
  }

  public openContact() {
    this.isOpen = false;
  }

  constructor() { }

  ngOnInit() {
    document.querySelector('textarea').addEventListener('keydown', () => {
      document.getElementById('text').style.height = document.getElementById('text').scrollHeight + 'px';
    });
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }

}
