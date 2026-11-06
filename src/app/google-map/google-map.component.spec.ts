import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GoogleMapComponent } from './google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';

describe('GoogleMapComponent', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleMapComponent],
      imports: [GoogleMapsModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
