/**
 * @license
 * Copyright JINSCOP. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbThemeModule,
  NbCardModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbMenuModule,
  NbPopoverModule,
  NbSidebarModule,
  NbActionsModule,
  NbSearchModule,
  NbTabsetModule,
  NbUserModule,
  NbBadgeModule,
  NbContextMenuModule,
  NbRouteTabsetModule,
  NbProgressBarModule,
  NbAlertModule,
  NbChatModule,
  NbSpinnerModule,
  NbStepperModule,
  NbAccordionModule,
} from '@ngx-app-frame/theme';

import { NbPlaygroundRoutingModule } from './playground-routing.module';
import { NbPlaygroundBaseComponent } from './playground-base.component';
import { NbPlaygroundLayoutComponent } from './playground-layout.component';

import { NbPopoverShowcaseComponent } from './theme/popover/popover-showcase.component';
import { NbPopoverTemplateRefComponent } from './theme/popover/popover-template-ref.component';
import { NbPopoverCustomComponentComponent } from './theme/popover/popover-custom-component.component';
import { NbPopoverPlacementsComponent } from './theme/popover/popover-placements.component';
import { NbPopoverModesComponent } from './theme/popover/popover-modes.component';
import { NbCheckboxShowcaseComponent } from './theme/checkbox/checkbox-showcase.component';
import { NbCheckboxStatusComponent } from './theme/checkbox/checkbox-status.component';
import { NbCheckboxDisabledComponent } from './theme/checkbox/checkbox-disabled.component';
import { NbLayoutShowcaseComponent } from './theme/layout/layout-showcase.component';
import { NbLayoutWFooterComponent } from './theme/layout/layout-w-footer.component';
import { NbLayoutFixedHeaderComponent } from './theme/layout/layout-fixed-header.component';
import { NbLayoutColumnLeftComponent } from './theme/layout/layout-column-left.component';
import { NbSidebarShowcaseComponent } from './theme/sidebar/sidebar-showcase.component';
import { NbSidebarCompactedComponent } from './theme/sidebar/sidebar-compacted.component';
import { NbSidebarRightComponent } from './theme/sidebar/sidebar-right.component';
import { NbSidebarToggleComponent } from './theme/sidebar/sidebar-toggle.component';
import { NbSidebarFixedComponent } from './theme/sidebar/sidebar-fixed.component';
import { NbCardShowcaseComponent } from './theme/card/card-showcase.component';
import { NbCardFullComponent } from './theme/card/card-full.component';
import { NbCardColorsComponent } from './theme/card/card-colors.component';
import { NbCardAccentsComponent } from './theme/card/card-accents.component';
import { NbCardSizesComponent } from './theme/card/card-sizes.component';
import { NbFlipCardShowcaseComponent } from './theme/flip-card/flip-card-showcase.component';
import { NbFlipCardColorsComponent } from './theme/flip-card/flip-card-colors.component';
import { NbFlipCardAccentsComponent } from './theme/flip-card/flip-card-accents.component';
import { NbFlipCardSizesComponent } from './theme/flip-card/flip-card-sizes.component';
import { NbFlipCardFullComponent } from './theme/flip-card/flip-card-full.component';
import { NbRevealCardShowcaseComponent } from './theme/reveal-card/reveal-card-showcase.component';
import { NbRevealCardColorsComponent } from './theme/reveal-card/reveal-card-colors.component';
import { NbRevealCardAccentsComponent } from './theme/reveal-card/reveal-card-accents.component';
import { NbRevealCardSizesComponent } from './theme/reveal-card/reveal-card-sizes.component';
import { NbRevealCardFullComponent } from './theme/reveal-card/reveal-card-full.component';
import { NbMenuShowcaseComponent } from './theme/menu/menu-showcase.component';
import { NbMenuChildrenComponent } from './theme/menu/menu-children.component';
import { NbActionShowcaseComponent } from './theme/action/action-showcase.component';
import { NbActionSizesComponent } from './theme/action/action-sizes.component';
import { NbActionBadgeComponent } from './theme/action/action-badge.component';
import { NbActionWidthComponent } from './theme/action/action-width.component';
import { NbSearchShowcaseComponent } from './theme/search/search-showcase.component';
import { NbSearchEventComponent } from './theme/search/search-event.component';
import { NbTabsetShowcaseComponent } from './theme/tabset/tabset-showcase.component';
import { NbTabsetBadgeComponent } from './theme/tabset/tabset-badge.component';
import { NbTabsetWidthComponent } from './theme/tabset/tabset-width.component';
import { NbUserShowcaseComponent } from './theme/user/user-showcase.component';
import { NbUserSizesComponent } from './theme/user/user-sizes.component';
import { NbBadgeShowcaseComponent } from './theme/badge/badge-showcase.component';
import { NbContextMenuShowcaseComponent } from './theme/context-menu/context-menu-showcase.component';
import { NbContextMenuClickComponent } from './theme/context-menu/context-menu-click.component';
import { NbCardTestComponent } from './theme/card/card-test.component';
import { NbActionTestComponent } from './theme/action/action-test.component';
import { NbCheckboxTestComponent } from './theme/checkbox/checkbox-test.component';
import { NbContextMenuTestComponent } from './theme/context-menu/context-menu-test.component';
import { NbLayoutTestComponent } from './theme/layout/layout-test.component';
import { NbLayoutHeaderTestComponent } from './theme/layout/layout-header-test.component';
import { NbLayoutFooterTestComponent } from './theme/layout/layout-footer-test.component';
import { NbThemeChangeTestComponent } from './theme/layout/theme-change-test.component';
import { NbThemeBreakpointTestComponent } from './theme/layout/theme-breakpoint-test.component';
import {
  NbMenuItem1Component,
  NbMenuItem2Component,
  NbMenuItem31Component,
  NbMenuItem32Component,
  NbMenuItem331Component,
  NbMenuItem332Component,
  NbMenuItem33Component,
  NbMenuItem3Component,
  NbMenuItem4Component,
  NbMenuTestComponent,
} from './theme/menu/menu-test.component';
import { NbPopoverTestComponent } from './theme/popover/popover-test.component';
import {
  NbRouteTabsetTestChild1Component,
  NbRouteTabsetTestChild2Component,
  NbRouteTabsetTestComponent,
} from './theme/tabset/route-tabset-test.component';
import { NbSearchTestComponent } from './theme/search/search-test.component';
import { NbSearchCustomizedTestComponent } from './theme/search/search-customized-test.component';
import { NbSidebarTestComponent } from './theme/sidebar/sidebar-test.component';
import { NbSidebarOneTestComponent } from './theme/sidebar/sidebar-one-test.component';
import { NbSidebarTwoTestComponent } from './theme/sidebar/sidebar-two-test.component';
import { NbSidebarThreeTestComponent } from './theme/sidebar/sidebar-three-test.component';
import { NbTabsetTestComponent } from './theme/tabset/tabset-test.component';
import { NbUserTestComponent } from './theme/user/user-test.component';
import { NbThemeDynamicTestComponent } from './theme/layout/theme-dynamic-test.component';
import { NbBootstrapTestComponent } from './theme/bootstrap/bootstrap-test.component';
import { NbStepperShowcaseComponent } from './theme/stepper/stepper-showcase.component';
import { NbStepperValidationComponent } from './theme/stepper/stepper-validation.component';
import { NbStepperVerticalComponent } from './theme/stepper/stepper-vertical.component';
import { NbStepperTestComponent } from './theme/stepper/stepper-test.component';
import { NbPlaygroundSharedModule } from './theme/shared/shared.module';
import { NbProgressBarShowcaseComponent } from './theme/progress-bar/progress-bar-showcase.component';
import { NbProgressBarStatusComponent } from './theme/progress-bar/progress-bar-status.component';
import { NbProgressBarValueComponent } from './theme/progress-bar/progress-bar-value.component';
import { NbProgressBarSizeComponent } from './theme/progress-bar/progress-bar-size.component';
import { NbProgressBarInteractiveComponent } from './theme/progress-bar/progress-bar-interactive.component';
import { NbAlertShowcaseComponent } from './theme/alert/alert-showcase.component';
import { NbAlertColorsComponent } from './theme/alert/alert-colors.component';
import { NbAlertAccentsComponent } from './theme/alert/alert-accents.component';
import { NbAlertSizesComponent } from './theme/alert/alert-sizes.component';
import { NbAlertTestComponent } from './theme/alert/alert-test.component';
import { NbChatShowcaseComponent } from './theme/chat/chat-showcase.component';
import { NbChatColorsComponent } from './theme/chat/chat-colors.component';
import { NbChatSizesComponent } from './theme/chat/chat-sizes.component';
import { NbChatDropComponent } from './theme/chat/chat-drop.component';
import { NbChatMessageTypesShowcaseComponent } from './theme/chat/chat-message-types-showcase.component';
import { NbChatConversationShowcaseComponent } from './theme/chat/chat-conversation-showcase.component';
import { NbChatTestComponent } from './theme/chat/chat-test.component';
import { NbSpinnerCardComponent } from './theme/spinner/spinner-card.component';
import { NbSpinnerTabsComponent } from './theme/spinner/spinner-tabs.component';
import { NbSpinnerButtonComponent } from './theme/spinner/spinner-button.component';
import { NbSpinnerSizesComponent } from './theme/spinner/spinner-sizes.component';
import { NbSpinnerColorsComponent } from './theme/spinner/spinner-colors.component';
import { NbAccordionShowcaseComponent } from './theme/accordion/accordion-showcase.component';
import { NbAccordionTestComponent } from './theme/accordion/accordion-test.component';
import { NbAccordionToggleComponent } from './theme/accordion/accordion-toggle.component';
import { NbAccordionMultiComponent } from './theme/accordion/accordion-multi.component';
import { NbLayoutSidebarSubheaderComponent } from './theme/layout/layout-sidebar-subheader.component';
import { NbLayoutSubheaderComponent } from './theme/layout/layout-subheader.component';

export const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbPopoverModule,
  NbCheckboxModule,
  NbSidebarModule,
  NbSidebarModule.forRoot(),
  NbMenuModule,
  NbMenuModule.forRoot(),
  NbActionsModule,
  NbSearchModule,
  NbThemeModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbUserModule,
  NbBadgeModule,
  NbContextMenuModule,
  NbStepperModule,
  NbAlertModule,
  NbPlaygroundSharedModule,
  NbProgressBarModule,
  NbChatModule.forChild({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
  }),
  NbSpinnerModule,
  NbAccordionModule,
];

export const NB_EXAMPLE_COMPONENTS = [
  NbPopoverTestComponent,
  NbPopoverShowcaseComponent,
  NbPopoverTemplateRefComponent,
  NbPopoverCustomComponentComponent,
  NbPopoverPlacementsComponent,
  NbPopoverModesComponent,
  NbCheckboxShowcaseComponent,
  NbCheckboxStatusComponent,
  NbCheckboxDisabledComponent,
  NbCheckboxTestComponent,
  NbProgressBarShowcaseComponent,
  NbProgressBarStatusComponent,
  NbProgressBarValueComponent,
  NbProgressBarSizeComponent,
  NbProgressBarInteractiveComponent,
  NbLayoutShowcaseComponent,
  NbLayoutWFooterComponent,
  NbLayoutFixedHeaderComponent,
  NbLayoutSidebarSubheaderComponent,
  NbLayoutSubheaderComponent,
  NbLayoutColumnLeftComponent,
  NbLayoutTestComponent,
  NbLayoutHeaderTestComponent,
  NbLayoutFooterTestComponent,
  NbThemeDynamicTestComponent,
  NbThemeChangeTestComponent,
  NbThemeBreakpointTestComponent,
  NbSidebarTestComponent,
  NbSidebarOneTestComponent,
  NbSidebarTwoTestComponent,
  NbSidebarThreeTestComponent,
  NbSidebarShowcaseComponent,
  NbSidebarCompactedComponent,
  NbSidebarRightComponent,
  NbSidebarToggleComponent,
  NbSidebarFixedComponent,
  NbCardShowcaseComponent,
  NbCardFullComponent,
  NbCardColorsComponent,
  NbCardAccentsComponent,
  NbCardSizesComponent,
  NbCardTestComponent,
  NbFlipCardShowcaseComponent,
  NbFlipCardColorsComponent,
  NbFlipCardAccentsComponent,
  NbFlipCardSizesComponent,
  NbFlipCardFullComponent,
  NbRevealCardShowcaseComponent,
  NbRevealCardColorsComponent,
  NbRevealCardAccentsComponent,
  NbRevealCardSizesComponent,
  NbRevealCardFullComponent,
  NbMenuItem1Component,
  NbMenuItem2Component,
  NbMenuItem31Component,
  NbMenuItem32Component,
  NbMenuItem331Component,
  NbMenuItem332Component,
  NbMenuItem33Component,
  NbMenuItem3Component,
  NbMenuItem4Component,
  NbMenuTestComponent,
  NbMenuShowcaseComponent,
  NbMenuChildrenComponent,
  NbActionShowcaseComponent,
  NbActionSizesComponent,
  NbActionBadgeComponent,
  NbActionWidthComponent,
  NbActionTestComponent,
  NbSearchTestComponent,
  NbSearchCustomizedTestComponent,
  NbSearchShowcaseComponent,
  NbSearchEventComponent,
  NbTabsetTestComponent,
  NbRouteTabsetTestChild1Component,
  NbRouteTabsetTestChild2Component,
  NbRouteTabsetTestComponent,
  NbTabsetShowcaseComponent,
  NbTabsetBadgeComponent,
  NbTabsetWidthComponent,
  NbUserTestComponent,
  NbUserShowcaseComponent,
  NbUserSizesComponent,
  NbBadgeShowcaseComponent,
  NbContextMenuShowcaseComponent,
  NbContextMenuClickComponent,
  NbContextMenuTestComponent,
  NbBootstrapTestComponent,
  NbAlertShowcaseComponent,
  NbAlertColorsComponent,
  NbAlertAccentsComponent,
  NbAlertSizesComponent,
  NbAlertTestComponent,
  NbChatShowcaseComponent,
  NbChatColorsComponent,
  NbChatSizesComponent,
  NbChatDropComponent,
  NbChatMessageTypesShowcaseComponent,
  NbChatConversationShowcaseComponent,
  NbChatTestComponent,
  NbSpinnerCardComponent,
  NbSpinnerTabsComponent,
  NbSpinnerButtonComponent,
  NbSpinnerSizesComponent,
  NbSpinnerColorsComponent,
  NbStepperShowcaseComponent,
  NbStepperValidationComponent,
  NbStepperVerticalComponent,
  NbStepperTestComponent,
  NbAccordionShowcaseComponent,
  NbAccordionTestComponent,
  NbAccordionToggleComponent,
  NbAccordionMultiComponent,
];


@NgModule({
  imports: [
    CommonModule,
    NbPlaygroundRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...NB_MODULES,
  ],
  declarations: [
    NbPlaygroundLayoutComponent,
    NbPlaygroundBaseComponent,
    ...NB_EXAMPLE_COMPONENTS,
  ],
})
export class NbPlaygroundModule {
}
