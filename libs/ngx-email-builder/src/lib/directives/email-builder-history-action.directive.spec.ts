import { inject } from "@angular/core/testing";

import { IPEmailBuilderHistoryActionDirective } from "./email-builder-history-action.directive";
import { AIPEmailBuilderHistoryService } from "../services";
import { IP_EMAIL_BUILDER_CONFIG, IPEmailBuilderConfig } from "../private-tokens";

describe("HistoryDirective", () => {
  it("should create an instance", inject([AIPEmailBuilderHistoryService, IP_EMAIL_BUILDER_CONFIG],
    (historyService: AIPEmailBuilderHistoryService, factory: IPEmailBuilderConfig) => {
      const directive = new IPEmailBuilderHistoryActionDirective(historyService, factory);
      expect(directive).toBeTruthy();
    }));
});
