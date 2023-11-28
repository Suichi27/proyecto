import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPComponent } from './nuevo-p.component';

describe('NuevoPComponent', () => {
  let component: NuevoPComponent;
  let fixture: ComponentFixture<NuevoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
