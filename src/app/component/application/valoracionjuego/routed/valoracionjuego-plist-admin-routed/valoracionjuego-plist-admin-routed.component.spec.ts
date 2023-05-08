/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValoracionjuegoPlistAdminRoutedComponent } from './valoracionjuego-plist-admin-routed.component';

describe('ValoracionjuegoPlistAdminRoutedComponent', () => {
  let component: ValoracionjuegoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ValoracionjuegoPlistAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionjuegoPlistAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionjuegoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
