import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCComponent } from './nuevo-c.component';

describe('NuevoCComponent', () => {
  let component: NuevoCComponent;
  let fixture: ComponentFixture<NuevoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
