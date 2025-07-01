import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderinputComponent } from './reminderinput.component';

describe('ReminderinputComponent', () => {
  let component: ReminderinputComponent;
  let fixture: ComponentFixture<ReminderinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReminderinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
