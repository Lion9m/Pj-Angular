import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExempleComponent } from './dialog-exemple.component';

describe('DialogExempleComponent', () => {
  let component: DialogExempleComponent;
  let fixture: ComponentFixture<DialogExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
