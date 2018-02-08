import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqDirectoryComponent } from './faq-directory.component';

describe('FaqDirectoryComponent', () => {
  let component: FaqDirectoryComponent;
  let fixture: ComponentFixture<FaqDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
