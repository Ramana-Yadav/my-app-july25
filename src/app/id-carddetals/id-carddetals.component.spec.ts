import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { IdCarddetalsComponent } from './id-carddetals.component';

describe('IdCarddetalsComponent', () => {
  let component: IdCarddetalsComponent;
  let fixture: ComponentFixture<IdCarddetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdCarddetalsComponent],
      imports:[HttpClientTestingModule ],
      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '123' }), // mock route param
          queryParams: of({}),       // optional: mock query params
          snapshot: {
            paramMap: {
              get: () => '123'       // mock snapshot.paramMap.get('id')
            }
          }
        }
      }
    ]
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
