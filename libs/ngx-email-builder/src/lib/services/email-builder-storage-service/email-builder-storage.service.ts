import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
  useFactory: () => inject(DefaultEmailBuilderStorageService)
})
export abstract class AIPEmailBuilderStorageService {
}

@Injectable({ providedIn: "root" })
class DefaultEmailBuilderStorageService implements AIPEmailBuilderStorageService {
}
