import {Component, OnInit} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {EventType} from '../tree-grid/tree-grid.component';
import {HttpClient} from '@angular/common/http';

export interface Events {
  id?: number;
  nameEvent: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  client?: {
    id?: number;
    surname: string;
    name: string;
    patronymic: string;
    phone?: string;
    groups?: any;
    role?: any;
  };
  forms?: string;
  eventTypes?: {
    id?: number;
    nameEventType: string;
    events?: any;
  };
}
export interface EventType {
  id?: number;
  nameEventType: string;
  events?: any;
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit {
  events: Events[] = [];
  eventType: EventType[] = [];
  eventtitle = '';
  eventdescription = '';
  eventbeginDate= '';
  eventendDate= '';
  eventsurname= '';
  eventforms= '';
  eventnameEventType= '';
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
  };
  source: LocalDataSource = new LocalDataSource();


  constructor(private service: SmartTableData, private http: HttpClient) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.http.get<Events[]>('https://vda-university.herokuapp.com/api/events')
      .subscribe(events => {
        this.events = events;
        // console.log('Мероприятия', events);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Вы уверены, что хотите удалить мероприятие?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
