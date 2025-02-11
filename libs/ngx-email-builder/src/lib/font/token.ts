import { InjectionToken } from '@angular/core';
import { IPDefinedFonts } from './interface';

export const defaultFonts: IPDefinedFonts = {
  webSafeFonts: [
    'Palatino Linotype, Book Antiqua, Palatino, serif',
    'Times New Roman, Times, serif',
    'Arial, Helvetica, sans-serif',
    'Arial Black, Gadget, sans-serif',
    'Comic Sans MS, cursive, sans-serif',
    'Impact, Charcoal, sans-serif',
    'Lucida Sans Unicode, Lucida Grande, sans-serif',
    'Tahoma, Geneva, sans-serif',
    'Trebuchet MS, Helvetica, sans-serif',
    'Verdana, Geneva, sans-serif',
    'Courier New, Courier, monospace',
    'Lucida Console, Monaco, monospace',
  ],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
}

export const IP_EMAIL_FONTS = new InjectionToken<IPDefinedFonts>('IP_EMAIL_FONTS', {
  providedIn: 'root',
  factory: () => defaultFonts,
});
