import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormComponent } from './usuarios-form.component';

describe('UsuariosFormComponent', () => {
  let component: UsuarioFormComponent;
  let fixture: ComponentFixture<UsuarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
