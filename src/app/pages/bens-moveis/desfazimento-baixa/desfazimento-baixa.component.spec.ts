import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesfazimentoBaixaComponent } from './desfazimento-baixa.component';

describe('DesfazimentoBaixaComponent', () => {
  let component: DesfazimentoBaixaComponent;
  let fixture: ComponentFixture<DesfazimentoBaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesfazimentoBaixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesfazimentoBaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
