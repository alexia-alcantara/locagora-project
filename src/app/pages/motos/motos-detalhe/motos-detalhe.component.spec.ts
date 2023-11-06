import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosDetalheComponent } from './motos-detalhe.component';

describe('MotosDetalheComponent', () => {
  let component: MotosDetalheComponent;
  let fixture: ComponentFixture<MotosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotosDetalheComponent]
    });
    fixture = TestBed.createComponent(MotosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
