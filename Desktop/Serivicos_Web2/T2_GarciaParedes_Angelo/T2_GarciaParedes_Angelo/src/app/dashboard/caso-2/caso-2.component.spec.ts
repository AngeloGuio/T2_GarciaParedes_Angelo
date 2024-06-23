import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caso2Component } from './caso-2.component';

describe('Caso2Component', () => {
  let component: Caso2Component;
  let fixture: ComponentFixture<Caso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caso2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Caso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
