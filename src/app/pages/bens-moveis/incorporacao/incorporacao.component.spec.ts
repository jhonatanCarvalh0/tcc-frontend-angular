import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorporacaoComponent } from './incorporacao.component';

describe('IncorporacaoComponent', () => {
  let component: IncorporacaoComponent;
  let fixture: ComponentFixture<IncorporacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorporacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncorporacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
