/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValoracionjuegoEditAdminRoutedComponent } from './valoracionjuego-edit-admin-routed.component';

describe('ValoracionjuegoEditAdminRoutedComponent', () => {
  let component: ValoracionjuegoEditAdminRoutedComponent;
  let fixture: ComponentFixture<ValoracionjuegoEditAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionjuegoEditAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionjuegoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
