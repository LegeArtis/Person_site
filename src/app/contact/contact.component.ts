import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuContactHelperService} from '../menu-contact-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm', { read: false}) formValues: any;
  private _isOpen = true;
  private _isSend = true;
  private all = true;

  public closeContact(value?: number) {
    let inter,
    count = 1;
    const timeout = value || 0.2;

    inter = setInterval(() => {
      if (count <= 0) {
        this.isOpen = true;
        this.isSend = true;
        clearInterval(inter);
        document.getElementById('contact').style.opacity = '1';
      } else {
        document.getElementById('contact').style.opacity = count.toString();
        count -= timeout;
      }
    }, 50);
  }

  public openContact() {
    this.all = false;
    let inter,
      maxCount,
      count = 0,
      units;

    if (window.innerWidth <= 1600) {
        units = 'px';
        maxCount = 800;
    } else {
      units = '%';
      maxCount = 50;
    }

    document.getElementById('contact').style.width = '0px';

    inter = setInterval(() => {
      if (count >= maxCount) {
        clearInterval(inter);
      } else {
        document.getElementById('contact').style.width = count + units;
        count += 0.05 * maxCount;
      }
    }, 14);

    this.isOpen = false;
  }

  constructor(private sender: MenuContactHelperService) { }

  ngOnInit() {
    document.querySelector('textarea').addEventListener('keydown', () => {
      document.getElementById('text').style.height = document.getElementById('text').scrollHeight + 'px';
    });
  }

  public sendMail(name, email, message) {
    // this.sender.sendMail({
    //   name: name,
    //   email: email,
    //   message: message
    // });
    this.formValues.resetForm();
    this.isSend = false;
    this.closeContact(0.025);
  }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  get isSend(): boolean {
    return this._isSend;
  }

  set isSend(value: boolean) {
    this._isSend = value;
  }
}
