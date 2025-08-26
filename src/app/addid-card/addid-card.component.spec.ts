import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddidCardComponent } from './addid-card.component';

describe('AddidCardComponent', () => {
  let component: AddidCardComponent;
  let fixture: ComponentFixture<AddidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddidCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
