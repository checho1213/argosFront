import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelroutesAdministrationComponent } from './travelroutes-administration.component';

describe('TravelroutesAdministrationComponent', () => {
  let component: TravelroutesAdministrationComponent;
  let fixture: ComponentFixture<TravelroutesAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelroutesAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelroutesAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
