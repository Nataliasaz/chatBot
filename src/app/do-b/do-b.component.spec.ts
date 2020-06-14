import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SmartTableDatepickerComponent} from './do-b.component';


describe('DoBComponent', () => {
  let component: SmartTableDatepickerComponent;
  let fixture: ComponentFixture<SmartTableDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTableDatepickerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTableDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
