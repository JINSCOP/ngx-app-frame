/**
 * @license
 * Copyright 金飞. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import {
  AFDomainOptions,
} from './domain.options';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
  ],
})
export class AFDomainModule {

  // TODO: check the options (throw exception?)
  /**
   * Main Theme Module
   *
   * @param nbThemeOptions {NbThemeOptions} Main theme options
   * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
   * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
   *
   * @returns {ModuleWithProviders}
   */
  static forRoot(afDomainOptions: AFDomainOptions): ModuleWithProviders {

    return <ModuleWithProviders> {
      ngModule: AFDomainModule,
      providers: [],
    };
  }
}
