import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcardsComponent } from './listcards.component';

describe('ListcardsComponent', () => {
  let component: ListcardsComponent;
  let fixture: ComponentFixture<ListcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
