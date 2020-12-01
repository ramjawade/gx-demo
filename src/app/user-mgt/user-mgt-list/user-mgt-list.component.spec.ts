import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgtListComponent } from './user-mgt-list.component';

describe('UserMgtListComponent', () => {
  let component: UserMgtListComponent;
  let fixture: ComponentFixture<UserMgtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
