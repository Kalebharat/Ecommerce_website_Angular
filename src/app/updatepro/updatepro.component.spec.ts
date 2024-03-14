import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproComponent } from './updatepro.component';

describe('UpdateproComponent', () => {
  let component: UpdateproComponent;
  let fixture: ComponentFixture<UpdateproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateproComponent]
    });
    fixture = TestBed.createComponent(UpdateproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
