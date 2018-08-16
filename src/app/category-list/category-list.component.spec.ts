import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { CategoryListComponent } from './category-list.component';
import { MatModule } from '../mat/mat.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SearchingService } from '../searching.service';
import { Category } from '../category';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryListComponent],
      imports: [
        MatModule,
        HttpClientTestingModule,
        NgxJsonLdModule,
        RouterTestingModule.withRoutes([])
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
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch atmost 7 categories', async(inject([SearchingService], (service: SearchingService) => {
    expect(component.categories.length).toEqual(0);
    spyOn(service, 'getAllCategories').and.returnValue(of([
      {id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
    ]));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.categories.length).toBeLessThanOrEqual(7);
  })));

  it('should render atmost 7 categories', async(inject([SearchingService], (service: SearchingService) => {
    const matchips = fixture.debugElement.queryAll(By.css('mat-chip'));
    expect(matchips.length).toEqual(0);
    spyOn(service, 'getAllCategories').and.returnValue(of([
      {id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}
    ]));
    component.ngOnInit();
    fixture.detectChanges();
    expect(matchips.length).toBeLessThanOrEqual(7);
  })));

  // it('should navigate according to category', fakeAsync(inject([SearchingService], (service: SearchingService) => {
  //   const navigateSpy = spyOn(router, 'navigate');
  //   spyOn(service, 'getAllCategories').and.returnValue(of([{id: 0, name: 'play'}]));
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   const chip = fixture.debugElement.queryAll(By.css('mat-chip'));
  //   chip[0].nativeElement.click();
  //   tick();
  //   fixture.detectChanges();
  //   expect(navigateSpy).toHaveBeenCalledWith(['/category/play']);
  // })));
});
