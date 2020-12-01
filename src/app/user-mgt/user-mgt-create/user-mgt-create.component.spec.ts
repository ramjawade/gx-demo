import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgtCreateComponent } from './user-mgt-create.component';

describe('UserMgtCreateComponent', () => {
  let component: UserMgtCreateComponent;
  let fixture: ComponentFixture<UserMgtCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgtCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
