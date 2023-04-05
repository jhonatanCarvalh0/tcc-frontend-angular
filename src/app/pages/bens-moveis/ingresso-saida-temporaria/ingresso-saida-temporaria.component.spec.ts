import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoSaidaTemporariaComponent } from './ingresso-saida-temporaria.component';

describe('IngressoSaidaTemporariaComponent', () => {
  let component: IngressoSaidaTemporariaComponent;
  let fixture: ComponentFixture<IngressoSaidaTemporariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngressoSaidaTemporariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngressoSaidaTemporariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
