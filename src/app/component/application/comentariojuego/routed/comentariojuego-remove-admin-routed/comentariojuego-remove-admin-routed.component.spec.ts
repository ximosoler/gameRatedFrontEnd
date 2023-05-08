/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentariojuegoRemoveAdminRoutedComponent } from './comentariojuego-remove-admin-routed.component';

describe('ComentariojuegoRemoveAdminRoutedComponent', () => {
  let component: ComentariojuegoRemoveAdminRoutedComponent;
  let fixture: ComponentFixture<ComentariojuegoRemoveAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariojuegoRemoveAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariojuegoRemoveAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
