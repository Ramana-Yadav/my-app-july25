import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
       imports: [
    RouterModule // ✅ This is required to use <router-outlet>
  ],
  providers: [
    {
      provide: ActivatedRoute,
      useValue: {
        // Mock route params or query params as needed
        params: of({ id: '123' }),
        queryParams: of({}),
        snapshot: {
          paramMap: {
            get: (key: string) => '123'
          }
        }
      }
    }
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
