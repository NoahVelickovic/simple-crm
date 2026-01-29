import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAdress } from './dialog-edit-adress';

describe('DialogEditAdress', () => {
  let component: DialogEditAdress;
  let fixture: ComponentFixture<DialogEditAdress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAdress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAdress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
