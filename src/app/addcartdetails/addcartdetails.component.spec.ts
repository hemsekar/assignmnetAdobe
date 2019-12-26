import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartdetailsComponent } from './addcartdetails.component';

describe('AddcartdetailsComponent', () => {
  let component: AddcartdetailsComponent;
  let fixture: ComponentFixture<AddcartdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
