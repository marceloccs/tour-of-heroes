import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  private hidden: boolean;

  constructor(public messageService: MessageService) {
    this.hidden = true;
  }

  ngOnInit(): void {
  }

  public toggleHidden(): void {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }

  public isHidden(): boolean {
    return this.hidden;
  }

}
