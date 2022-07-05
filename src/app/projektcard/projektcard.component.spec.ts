import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektcardComponent } from './projektcard.component';

describe('ProjektcardComponent', () => {
  let component: ProjektcardComponent;
  let fixture: ComponentFixture<ProjektcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
