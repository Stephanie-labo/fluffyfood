import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FromComponent } from "./form.component";

describe("formComponent", () => {
  let component: FromComponent;
  let fixture: ComponentFixture<FromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
