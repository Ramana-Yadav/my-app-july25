import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCarddetalsComponent } from './id-carddetals.component';

describe('IdCarddetalsComponent', () => {
  let component: IdCarddetalsComponent;
  let fixture: ComponentFixture<IdCarddetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCarddetalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCarddetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
