import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoBensMoveisComponent } from './ingresso-bens-moveis.component';

describe('IngressoBensMoveisComponent', () => {
  let component: IngressoBensMoveisComponent;
  let fixture: ComponentFixture<IngressoBensMoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngressoBensMoveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngressoBensMoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
