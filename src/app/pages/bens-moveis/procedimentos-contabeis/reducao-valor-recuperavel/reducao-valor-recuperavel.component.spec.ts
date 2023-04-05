import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducaoValorRecuperavelComponent } from './reducao-valor-recuperavel.component';

describe('ReducaoValorRecuperavelComponent', () => {
  let component: ReducaoValorRecuperavelComponent;
  let fixture: ComponentFixture<ReducaoValorRecuperavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducaoValorRecuperavelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducaoValorRecuperavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
