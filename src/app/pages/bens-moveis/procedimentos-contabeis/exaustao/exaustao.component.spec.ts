import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaustaoComponent } from './exaustao.component';

describe('ExaustaoComponent', () => {
  let component: ExaustaoComponent;
  let fixture: ComponentFixture<ExaustaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaustaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaustaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
