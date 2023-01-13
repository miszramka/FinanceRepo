import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseListComponent } from './expanse-list.component';

describe('ExpanseListComponent', () => {
  let component: ExpanseListComponent;
  let fixture: ComponentFixture<ExpanseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpanseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpanseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
