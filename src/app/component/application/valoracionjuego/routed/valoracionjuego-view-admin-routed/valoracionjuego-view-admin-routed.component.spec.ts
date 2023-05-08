/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValoracionjuegoViewAdminRoutedComponent } from './valoracionjuego-view-admin-routed.component';

describe('ValoracionjuegoViewAdminRoutedComponent', () => {
  let component: ValoracionjuegoViewAdminRoutedComponent;
  let fixture: ComponentFixture<ValoracionjuegoViewAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionjuegoViewAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionjuegoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
