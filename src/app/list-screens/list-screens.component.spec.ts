import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScreensComponent } from './list-screens.component';

describe('ListScreensComponent', () => {
  let component: ListScreensComponent;
  let fixture: ComponentFixture<ListScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
