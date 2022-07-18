/*
 * Copyright (c) 2022.
 */

import { TestBed } from "@angular/core/testing";

import { AIPEmailBuilderHistoryService } from "./email-builder-history.service";

describe("EmailBuilderHistoryService", () => {
  let service: AIPEmailBuilderHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIPEmailBuilderHistoryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
