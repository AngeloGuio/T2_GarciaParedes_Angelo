import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caso3Component } from './caso-3.component';

describe('Caso3Component', () => {
  let component: Caso3Component;
  let fixture: ComponentFixture<Caso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caso3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Caso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
