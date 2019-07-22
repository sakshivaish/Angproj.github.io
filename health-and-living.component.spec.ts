import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndLivingComponent } from './health-and-living.component';

describe('HealthAndLivingComponent', () => {
  let component: HealthAndLivingComponent;
  let fixture: ComponentFixture<HealthAndLivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthAndLivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAndLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
