import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { PinInterestComponent } from './pin-interest.component';

describe('PinInterestComponent', () => {
  let component: PinInterestComponent;
  let fixture: ComponentFixture<PinInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinInterestComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
