import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MerchantListComponent } from './merchant-list.component';
import { MatModule } from '../mat/mat.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

describe('MerchantListComponent', () => {
  let component: MerchantListComponent;
  let fixture: ComponentFixture<MerchantListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantListComponent],
      imports: [
        MatModule,
        HttpClientTestingModule,
        NgxJsonLdModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
