import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginiComponent } from './logini.component';

describe('LoginiComponent', () => {
  let component: LoginiComponent;
  let fixture: ComponentFixture<LoginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
