import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfarmerComponent } from './newfarmer.component';

describe('NewfarmerComponent', () => {
  let component: NewfarmerComponent;
  let fixture: ComponentFixture<NewfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewfarmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
