import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

export interface Events {
  id?: number;
  nameEvent: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  client: string;
  forms: string;
  eventTypes: string;
}

@Injectable()
export class SmartTableService extends SmartTableData {
   data = [
   {
     id: 'Спортивное мероприятие',
     firstName: '6 июня приглашаем вас',
     lastName: '06.06.2020',
     username: '06.06.2020',
     email: 'Семенов Ю.В',
     age: 'Спорт',
   },
   {
     id: 'Творчество-это жизнь',
     firstName: '20 июня приглашаем',
     lastName: '20.06.2020',
     username: '20.06.2020',
     email: 'Киримова Т.С',
     age: 'Творчество',
   },
   ];
   getData() {
     return this.data;
  }
}
