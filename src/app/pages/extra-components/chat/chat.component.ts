import {Component, OnInit} from '@angular/core';
export let version: string = '';
import {ChatService, Todo} from './chat.service';
import {AppCounterService} from './services/app-counter.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
export interface Todo {
  message: string;
}
export let version1: string = '';
@Component({
  selector: 'ngx-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss'],
  providers: [ ChatService ],
})
export class ChatComponent implements OnInit {
  public result: string;
  todoTitle: 'gyuy7';
  answer: Todo;
  q: string;
  pereme = '';
  todos: Todo[] = [];
  message: string = '';
  messages: any[];
  p: string;
  num: number = 0;

  AppCounterService: AppCounterService;

  constructor(protected chatService: ChatService) {
    this.messages = this.chatService.loadMessages();
    console.log(this.message);
  }

  ngOnInit() {
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });
    this.messages.push({
      text: event.message,
      date: new Date() ,
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'me',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    // environment.result_chat = event.message;
    const botReply = this.chatService.reply(event.message);
    console.log(botReply.text);
    this.chatService.chatbot({
      message: event.message,
    }).subscribe(todo => {
      this.todos.push(todo);
      botReply.text = todo.message;
    });
    // console.log(event.message);
    if (botReply) {
        setTimeout(() => {
          this.messages.push(botReply);
          // console.log(this.messages);
        }, 500);
      }
  }

  // sendMessage($event: any) {
  //     if (!this.todoTitle.trim()) {
  //       return;
  //       }
  //     const newtodo: Todo = {
  //       message: this.todoTitle,
  //     };
  //     this.http.post<Todo>('https://vda-university.herokuapp.com/api/bot', newtodo).subscribe(todo => {
  //     this.todos.push(todo);
  //   });
  // }
}
