import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdocumentsComponent } from './listofdocuments.component';

describe('ListofdocumentsComponent', () => {
  let component: ListofdocumentsComponent;
  let fixture: ComponentFixture<ListofdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofdocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
