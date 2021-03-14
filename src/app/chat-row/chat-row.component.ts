import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-row',
  templateUrl: './chat-row.component.html',
  styleUrls: ['./chat-row.component.scss']
})
export class ChatRowComponent implements OnInit {

  @Input() name = 'Peter Parker';
  @Input() date: Date = new Date();
  @Input() lastMessage = 'Hey when we will meet again?';
  @Input() newMessageCount = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
