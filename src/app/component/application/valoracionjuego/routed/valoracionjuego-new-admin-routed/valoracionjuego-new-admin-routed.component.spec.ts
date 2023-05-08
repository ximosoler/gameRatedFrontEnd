/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValoracionjuegoNewAdminRoutedComponent } from './valoracionjuego-new-admin-routed.component';

describe('ValoracionjuegoNewAdminRoutedComponent', () => {
  let component: ValoracionjuegoNewAdminRoutedComponent;
  let fixture: ComponentFixture<ValoracionjuegoNewAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionjuegoNewAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionjuegoNewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
