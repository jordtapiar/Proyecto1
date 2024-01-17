import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CodigoQRPage } from './codigo-qr.page';

describe('CodigoQRPage', () => {
  let component: CodigoQRPage;
  let fixture: ComponentFixture<CodigoQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodigoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
