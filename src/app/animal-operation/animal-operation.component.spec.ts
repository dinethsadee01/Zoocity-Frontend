import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalOperationComponent } from './animal-operation.component';

describe('AnimalOperationComponent', () => {
  let component: AnimalOperationComponent;
  let fixture: ComponentFixture<AnimalOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
