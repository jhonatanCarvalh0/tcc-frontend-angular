import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciacaoComponent } from './depreciacao.component';

describe('DepreciacaoComponent', () => {
  let component: DepreciacaoComponent;
  let fixture: ComponentFixture<DepreciacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepreciacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepreciacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
