import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAnimalComponent } from './view-all-animal.component';

describe('ViewAllAnimalComponent', () => {
  let component: ViewAllAnimalComponent;
  let fixture: ComponentFixture<ViewAllAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
