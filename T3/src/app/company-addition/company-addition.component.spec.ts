import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdditionComponent } from './company-addition.component';

describe('CompanyAdditionComponent', () => {
  let component: CompanyAdditionComponent;
  let fixture: ComponentFixture<CompanyAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
