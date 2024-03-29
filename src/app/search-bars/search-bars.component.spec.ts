import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchBarsComponent } from './search-bars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from '../mat/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchBarsComponent', () => {
  let component: SearchBarsComponent;
  let fixture: ComponentFixture<SearchBarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarsComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
