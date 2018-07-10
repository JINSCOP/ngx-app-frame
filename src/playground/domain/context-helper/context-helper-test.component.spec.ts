/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AFContextHelperTestComponent } from './context-helper-test.component';

describe('ContextHelperTestComponent', () => {
  let component: AFContextHelperTestComponent;
  let fixture: ComponentFixture<AFContextHelperTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFContextHelperTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFContextHelperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
