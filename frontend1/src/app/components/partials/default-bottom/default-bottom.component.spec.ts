import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBottomComponent } from './default-bottom.component';

describe('DefaultBottomComponent', () => {
  let component: DefaultBottomComponent;
  let fixture: ComponentFixture<DefaultBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
