import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyCompComponent } from './dictionary-FormDetail.component';

describe('DummyCompComponent', () => {
  let component: DummyCompComponent;
  let fixture: ComponentFixture<DummyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
