import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektPostComponent } from './projekt-post.component';

describe('ProjektPostComponent', () => {
  let component: ProjektPostComponent;
  let fixture: ComponentFixture<ProjektPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
