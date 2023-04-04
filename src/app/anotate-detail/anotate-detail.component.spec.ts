import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotateDetailComponent } from './anotate-detail.component';

describe('AnotateDetailComponent', () => {
  let component: AnotateDetailComponent;
  let fixture: ComponentFixture<AnotateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotateDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
