/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentariojuegoPlistAdminRoutedComponent } from './comentariojuego-plist-admin-routed.component';

describe('ComentariojuegoPlistAdminRoutedComponent', () => {
  let component: ComentariojuegoPlistAdminRoutedComponent;
  let fixture: ComponentFixture<ComentariojuegoPlistAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariojuegoPlistAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariojuegoPlistAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
