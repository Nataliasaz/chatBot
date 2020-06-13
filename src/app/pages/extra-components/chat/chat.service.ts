import { Injectable } from '@angular/core';
import { messages } from './messages';
import {  gifsLinks, imageLinks } from './bot-replies';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ChatComponent} from './chat.component';
const botAvatar: string = 'https://cloclo2.cloud.mail.ru/inline/%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8/ic/039-thinking.png?etag=E03609C9A72D0EBC871ECC21781CFF4A26963961&x-email=taliasaz%40bk.ru';
import * as version1 from './chat.component';
import {environment} from '../../../../environments/environment';
export const botReplies = [
  {
    regExp: /(.*)/g,
    answerArray: ['g'],
    type: 'text',
    reply: {
      text: '',
      reply: false,
      date: new Date(),
      user: {
        name: 'chatBot',
        avatar: botAvatar,
      },
    },
  },
];
export interface Todo {
  message: string;
}
@Injectable()
export class ChatService {
  q: string = '';
  par: string;
  kkk: string;
  todos: Todo[] = [];
  constructor(private http: HttpClient) {
  }
  loadMessages() {
    return messages;
  }
  loadBotReplies() {
    return botReplies;
  }
  chatbot(todo: Todo): Observable<Todo> {
   return this.http.post<Todo>('https://vda-university.herokuapp.com/api/bot', todo);
  }
  reply(message: string) {
    const botReply: any = this.loadBotReplies().find((reply: any) => message.search(reply.regExp) !== -1);
    botReply.reply.text = this.q;
    return {...botReply.reply};
  }
}
