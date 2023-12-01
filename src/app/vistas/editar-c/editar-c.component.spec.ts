import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCComponent } from './editar-c.component';

describe('EditarCComponent', () => {
  let component: EditarCComponent;
  let fixture: ComponentFixture<EditarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
