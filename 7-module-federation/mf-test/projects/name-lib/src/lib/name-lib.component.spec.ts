import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLibComponent } from './name-lib.component';

describe('NameLibComponent', () => {
  let component: NameLibComponent;
  let fixture: ComponentFixture<NameLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
