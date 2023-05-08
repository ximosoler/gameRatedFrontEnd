/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentariojuegoDetailAdminUnroutedComponent } from './comentariojuego-detail-admin-unrouted.component';

describe('ComentariojuegoDetailAdminUnroutedComponent', () => {
  let component: ComentariojuegoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<ComentariojuegoDetailAdminUnroutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariojuegoDetailAdminUnroutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariojuegoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
