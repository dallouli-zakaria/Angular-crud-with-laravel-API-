import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admintable2Component } from './admintable2.component';

describe('Admintable2Component', () => {
  let component: Admintable2Component;
  let fixture: ComponentFixture<Admintable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admintable2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Admintable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
