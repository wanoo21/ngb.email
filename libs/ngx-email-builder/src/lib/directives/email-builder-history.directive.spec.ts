import { IPEmailBuilderHistoryDirective } from "./email-builder-history.directive";
import { inject } from "@angular/core/testing";
import { AIPEmailBuilderHistoryService } from "../services";

describe("HistoryDirective", () => {
  it("should create an instance", inject([AIPEmailBuilderHistoryService], (historyService: AIPEmailBuilderHistoryService) => {
    const directive = new IPEmailBuilderHistoryDirective(historyService);
    expect(directive).toBeTruthy();
  }));
});
