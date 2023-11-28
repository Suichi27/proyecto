import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPComponent } from './editar-p.component';

describe('EditarPComponent', () => {
  let component: EditarPComponent;
  let fixture: ComponentFixture<EditarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
