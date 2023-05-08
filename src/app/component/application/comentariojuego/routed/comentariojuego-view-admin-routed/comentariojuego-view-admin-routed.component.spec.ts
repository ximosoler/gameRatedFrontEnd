/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentariojuegoViewAdminRoutedComponent } from './comentariojuego-view-admin-routed.component';

describe('ComentariojuegoViewAdminRoutedComponent', () => {
  let component: ComentariojuegoViewAdminRoutedComponent;
  let fixture: ComponentFixture<ComentariojuegoViewAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariojuegoViewAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariojuegoViewAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
