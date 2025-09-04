import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


import { CreateVehicleComponent } from './create-vehicle.component';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponent ],
      imports: [HttpClientTestingModule,CommonModule],

      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),  // mock route params
            queryParams: of({}),        // optional
            snapshot: {
              paramMap: {
                get: () => '123'        // mock snapshot param
              }
            }
          }
        }
      ]
    })
    
    .compileComponents();

    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
