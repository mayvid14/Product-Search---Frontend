import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { MatModule } from '../mat/mat.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('ProductCardComponent', () => {
  let component: ForTestComponent;
  let fixture: ComponentFixture<ForTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ForTestComponent, ProductCardComponent],
      imports: [MatModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-for-test-component',
  template: '<app-product-card [stores]="stores" [item]="item"></app-product-card>'
})
class ForTestComponent {
  stores = [{ feeds: [] }];
  item = { feeds: [] };
}
