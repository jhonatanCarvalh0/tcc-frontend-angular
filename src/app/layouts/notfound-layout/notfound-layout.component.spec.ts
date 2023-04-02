import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundLayoutComponent } from './notfound-layout.component';

describe('NotfoundLayoutComponent', () => {
  let component: NotfoundLayoutComponent;
  let fixture: ComponentFixture<NotfoundLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
