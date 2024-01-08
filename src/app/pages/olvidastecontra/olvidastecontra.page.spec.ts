import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { OlvidastecontraPage } from './olvidastecontra.page';

describe('OlvidastecontraPage', () => {
  let component: OlvidastecontraPage;
  let fixture: ComponentFixture<OlvidastecontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidastecontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
