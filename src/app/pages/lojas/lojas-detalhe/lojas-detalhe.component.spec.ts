import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasDetalheComponent } from './lojas-detalhe.component';

describe('LojasDetalheComponent', () => {
  let component: LojasDetalheComponent;
  let fixture: ComponentFixture<LojasDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LojasDetalheComponent]
    });
    fixture = TestBed.createComponent(LojasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
