import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DatabindingComponent } from './databinding.component';

describe('DatabindingComponent', () => {
  let component: DatabindingComponent;
  let fixture: ComponentFixture<DatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingComponent ],
       imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Test 2: Initial values
  it('should have initial values as 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.sum).toBe(0);
  });

  // Test 3: Check addition with positive numbers
  it('should correctly calculate the sum of num1 and num2', () => {
    component.num1 = 5;
    component.num2 = 10;
    component.addition();
    expect(component.sum).toBe(15);
  });

  // Test 4: Check addition with negative numbers
  it('should correctly calculate the sum with negative numbers', () => {
    component.num1 = -3;
    component.num2 = -7;
    component.addition();
    expect(component.sum).toBe(-10);
  });

  // Test 5: Check addition with mixed sign numbers
  it('should correctly calculate the sum with mixed sign numbers', () => {
    component.num1 = -5;
    component.num2 = 15;
    component.addition();
    expect(component.sum).toBe(10);
  });
});
