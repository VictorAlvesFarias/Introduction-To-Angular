import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornalComponent } from './jornal.component';

describe('JornalComponent', () => {
  let component: JornalComponent;
  let fixture: ComponentFixture<JornalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JornalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
