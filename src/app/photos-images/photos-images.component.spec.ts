import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosImagesComponent } from './photos-images.component';

describe('PhotosImagesComponent', () => {
  let component: PhotosImagesComponent;
  let fixture: ComponentFixture<PhotosImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosImagesComponent]
    });
    fixture = TestBed.createComponent(PhotosImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
