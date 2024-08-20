import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayNBindingComponent } from './two-way-nbinding.component';

describe('TwoWayNBindingComponent', () => {
  let component: TwoWayNBindingComponent;
  let fixture: ComponentFixture<TwoWayNBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayNBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayNBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
