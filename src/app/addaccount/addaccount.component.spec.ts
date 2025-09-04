import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { AddaccountComponent } from './addaccount.component';

describe('AddaccountComponent', () => {
  let component: AddaccountComponent;
  let fixture: ComponentFixture<AddaccountComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddaccountComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock the `params` observable if needed
            params: of({ id: '123' }), // adjust based on your logic
            // mock other properties like `snapshot`, `queryParams` if needed
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
