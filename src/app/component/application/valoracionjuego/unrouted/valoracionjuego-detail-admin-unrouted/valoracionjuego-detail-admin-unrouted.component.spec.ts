/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValoracionjuegoDetailAdminUnroutedComponent } from './valoracionjuego-detail-admin-unrouted.component';

describe('ValoracionjuegoDetailAdminUnroutedComponent', () => {
  let component: ValoracionjuegoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<ValoracionjuegoDetailAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoracionjuegoDetailAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoracionjuegoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
