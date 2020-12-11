import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompaniesComponent } from './app-companies.component';

describe('AppCompaniesComponent', () => {
  let component: AppCompaniesComponent;
  let fixture: ComponentFixture<AppCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
