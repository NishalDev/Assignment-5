import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveUserComponent } from './retrieve-user.component';

describe('RetrieveUserComponent', () => {
  let component: RetrieveUserComponent;
  let fixture: ComponentFixture<RetrieveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieveUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetrieveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
