import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ],
      imports: [
    FormsModule,  // <-- add this here
    // other modules
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
