import { Directive } from "@angular/core";

import { AIPValueChanged } from "../core/ValueChanged";

@Directive()
export abstract class AIPImageUpload extends AIPValueChanged<string> {
}
