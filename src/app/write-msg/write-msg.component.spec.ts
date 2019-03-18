import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMsgComponent } from './write-msg.component';

describe('WriteMsgComponent', () => {
  let component: WriteMsgComponent;
  let fixture: ComponentFixture<WriteMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
