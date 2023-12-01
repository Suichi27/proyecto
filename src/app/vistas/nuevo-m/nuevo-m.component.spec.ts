import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMComponent } from './nuevo-m.component';

describe('NuevoMComponent', () => {
  let component: NuevoMComponent;
  let fixture: ComponentFixture<NuevoMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
