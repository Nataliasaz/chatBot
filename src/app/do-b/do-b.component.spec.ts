import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoBComponent } from './do-b.component';

describe('DoBComponent', () => {
  let component: DoBComponent;
  let fixture: ComponentFixture<DoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
