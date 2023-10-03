import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosDetalheComponent } from './planos-detalhe.component';

describe('PlanosDetalheComponent', () => {
  let component: PlanosDetalheComponent;
  let fixture: ComponentFixture<PlanosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanosDetalheComponent]
    });
    fixture = TestBed.createComponent(PlanosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
