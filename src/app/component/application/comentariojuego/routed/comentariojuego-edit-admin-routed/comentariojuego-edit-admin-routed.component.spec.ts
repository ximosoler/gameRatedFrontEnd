/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentariojuegoEditAdminRoutedComponent } from './comentariojuego-edit-admin-routed.component';

describe('ComentariojuegoEditAdminRoutedComponent', () => {
  let component: ComentariojuegoEditAdminRoutedComponent;
  let fixture: ComponentFixture<ComentariojuegoEditAdminRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariojuegoEditAdminRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariojuegoEditAdminRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
