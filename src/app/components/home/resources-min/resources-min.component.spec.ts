import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMinComponent } from './resources-min.component';

describe('ResourcesMinComponent', () => {
  let component: ResourcesMinComponent;
  let fixture: ComponentFixture<ResourcesMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesMinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
