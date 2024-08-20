import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationShadowDOMComponent } from './encapsulation-shadow-dom.component';

describe('EncapsulationShadowDOMComponent', () => {
  let component: EncapsulationShadowDOMComponent;
  let fixture: ComponentFixture<EncapsulationShadowDOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationShadowDOMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationShadowDOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
