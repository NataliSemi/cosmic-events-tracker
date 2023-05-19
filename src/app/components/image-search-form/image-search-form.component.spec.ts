import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchFormComponent } from './image-search-form.component';

describe('ImageSearchFormComponent', () => {
  let component: ImageSearchFormComponent;
  let fixture: ComponentFixture<ImageSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSearchFormComponent]
    });
    fixture = TestBed.createComponent(ImageSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
