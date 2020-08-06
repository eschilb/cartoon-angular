import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonFormComponent } from './cartoon-form.component';

describe('CartoonFormComponent', () => {
  let component: CartoonFormComponent;
  let fixture: ComponentFixture<CartoonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
