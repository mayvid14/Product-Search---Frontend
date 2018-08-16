import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListComponent } from './category-list.component';
import { MatModule } from '../mat/mat.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SearchingService } from '../searching.service';
import { Category } from '../category';

describe('CategoryListComponent', () => {
  let service: MockSearchingService;
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async(() => {
    service = new MockSearchingService();
    TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [
        MatModule,
        HttpClientTestingModule,
        NgxJsonLdModule
      ],
      // providers: [
      //   { provide: SearchingService, useValue: service }
      // ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display atmost 7 categories', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.categories.length).toEqual(0);
  });
});

class MockSearchingService {
  getAllCategories() {
    return [
      {id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
    ];
  }
}
