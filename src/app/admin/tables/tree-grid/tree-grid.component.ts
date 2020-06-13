import {Component, Input, OnInit} from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../../@core/data/smart-table';
import {SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent} from '../../../do-b/do-b.component';
import {HttpClient} from '@angular/common/http';
import event = google.maps.event;


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

export interface Events {
  id?: number;
  nameEvent: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  client: null;
  forms: null;
  eventTypes: null;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
})
export class TreeGridComponent implements OnInit{
  events: Events[] = [];
  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  ngOnInit() {
    this.http.get<Events[]>('https://vda-university.herokuapp.com/api/events')
      .subscribe(events => {
        console.log('Response', events),
          this.events = events;
      });
  }
  public settings = {
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
    columns: {
      id: {
        title: 'Название мероприятия',
        type: 'string',
      },
      firstName: {
        title: 'Описание',
        type: 'string',
      },
    //   <div class="form-group">
    // <textarea nbInput placeholder="Message"></textarea>
    // </div>
      lastName: {
        title: 'Дата начала',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      username: {
        title: 'Дата окончания',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
          config: {
            placeholder: 'End Time',
          },
        },
      },
      email: {
        title: 'Организатор',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              { title: 'Сервиченко Б.И'},
              { title: 'Семенов А.Д'},
              { title: 'Пученко Ю.А'},
              { title: 'Николаева Т.В'},
            ],
          },
        },
      },
      age: {
        title: 'Тип мероприятия',
        type: 'string',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
             list:  [
               { title: 'Спортивное'},
               { title: 'Творческое'},
               { title: 'Научное'},
            //   {value: '1', title: 'Option 1'},
            //   {value: '2', title: 'Option 2'},
            //   {value: '3', title: 'Option 3'},
            //   {value: '4', title: 'Option 4'},
            ],
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Вы действительно хотите удалить мероприятие?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  constructor (private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private service: SmartTableData, private http: HttpClient) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
    const data = this.service.getData();
    this.source.load(data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
      children: [
        { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
        { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
        { data: { name: 'project-3', kind: 'txt', size: '466 KB' } },
        { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
      ],
    },
    {
      data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
      children: [
        { data: { name: 'Report 1', kind: 'doc', size: '100 KB' } },
        { data: { name: 'Report 2', kind: 'doc', size: '300 KB' } },
      ],
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
      children: [
        { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
        { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
