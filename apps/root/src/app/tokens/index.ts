/*
 * Copyright (c) 2022.
 */

import { InjectionToken } from "@angular/core";
import { InnerPageComponent } from "../components/inner-page/inner-page.component";

export const INNER_PAGE_COMPONENT = new InjectionToken<InnerPageComponent>('Inner page component injection token')
