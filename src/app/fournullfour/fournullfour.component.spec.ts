import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournullfourComponent } from './fournullfour.component';

describe('FournullfourComponent', () => {
  let component: FournullfourComponent;
  let fixture: ComponentFixture<FournullfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournullfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournullfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
