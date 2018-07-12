/**
 * @license
 * Copyright JINSCOP. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { NbLayoutHeaderTestComponent } from './theme/layout/layout-header-test.component';
import { NbLayoutFooterTestComponent } from './theme/layout/layout-footer-test.component';
import { NbThemeChangeTestComponent } from './theme/layout/theme-change-test.component';
import { NbThemeDynamicTestComponent } from './theme/layout/theme-dynamic-test.component';
import { NbThemeBreakpointTestComponent } from './theme/layout/theme-breakpoint-test.component';
import { NbLayoutTestComponent } from './theme/layout/layout-test.component';
import {
  NbMenuItem1Component,
  NbMenuItem2Component,
  NbMenuItem31Component,
  NbMenuItem32Component,
  NbMenuItem331Component,
  NbMenuItem332Component,
  NbMenuItem33Component,
  NbMenuItem3Component, NbMenuItem4Component,
  NbMenuTestComponent,
} from './theme/menu/menu-test.component';
import { NbPopoverTestComponent } from './theme/popover/popover-test.component';
import {
  NbRouteTabsetTestChild1Component, NbRouteTabsetTestChild2Component,
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
import { NbBootstrapTestComponent } from './theme/bootstrap/bootstrap-test.component';
import { NbProgressBarShowcaseComponent } from './theme/progress-bar/progress-bar-showcase.component';
import { NbProgressBarStatusComponent } from './theme/progress-bar/progress-bar-status.component';
import { NbProgressBarValueComponent } from './theme/progress-bar/progress-bar-value.component';
import { NbProgressBarSizeComponent } from './theme/progress-bar/progress-bar-size.component';
import { NbProgressBarInteractiveComponent } from './theme/progress-bar/progress-bar-interactive.component';
import { NbAlertTestComponent } from './theme/alert/alert-test.component';
import { NbAlertShowcaseComponent } from './theme/alert/alert-showcase.component';
import { NbAlertColorsComponent } from './theme/alert/alert-colors.component';
import { NbAlertAccentsComponent } from './theme/alert/alert-accents.component';
import { NbAlertSizesComponent } from './theme/alert/alert-sizes.component';
import { NbChatShowcaseComponent } from './theme/chat/chat-showcase.component';
import { NbChatColorsComponent } from './theme/chat/chat-colors.component';
import { NbChatSizesComponent } from './theme/chat/chat-sizes.component';
import { NbChatDropComponent } from './theme/chat/chat-drop.component';
import { NbChatMessageTypesShowcaseComponent } from './theme/chat/chat-message-types-showcase.component';
import { NbChatConversationShowcaseComponent } from './theme/chat/chat-conversation-showcase.component';
import { NbChatTestComponent } from './theme/chat/chat-test.component';
import { NbSpinnerCardComponent } from './theme/spinner/spinner-card.component';
import { NbSpinnerButtonComponent } from './theme/spinner/spinner-button.component';
import { NbSpinnerTabsComponent } from './theme/spinner/spinner-tabs.component';
import { NbSpinnerSizesComponent } from './theme/spinner/spinner-sizes.component';
import { NbSpinnerColorsComponent } from './theme/spinner/spinner-colors.component';
// import { NbStepperShowcaseComponent } from './theme/stepper/stepper-showcase.component';
// import { NbStepperValidationComponent } from './theme/stepper/stepper-validation.component';
// import { NbStepperVerticalComponent } from './theme/stepper/stepper-vertical.component';
// import { NbStepperTestComponent } from './theme/stepper/stepper-test.component';
import { NbAccordionShowcaseComponent } from './theme/accordion/accordion-showcase.component';
import { NbAccordionTestComponent } from './theme/accordion/accordion-test.component';
import { NbAccordionMultiComponent } from './theme/accordion/accordion-multi.component';
import { NbAccordionToggleComponent } from './theme/accordion/accordion-toggle.component';
import { NbLayoutSidebarSubheaderComponent } from './theme/layout/layout-sidebar-subheader.component';
import { NbLayoutSubheaderComponent } from './theme/layout/layout-subheader.component';

import { AFContextHelperTestComponent } from './domain/context-helper/context-helper-test.component';
import { AFPaginatorComponent } from './domain/paginator/paginator.component';
import { ValidationComponent } from './utils/validation/validation.component';

export const routes: Routes = [
  {
    path: '',
    component: NbPlaygroundLayoutComponent,
    children: [
      {
        path: 'popover',
        children: [
          {
            path: 'popover-test.component',
            component: NbPopoverTestComponent,
          },
          {
            path: 'popover-showcase.component',
            component: NbPopoverShowcaseComponent,
          },
          {
            path: 'popover-template-ref.component',
            component: NbPopoverTemplateRefComponent,
          },
          {
            path: 'popover-custom-component.component',
            component: NbPopoverCustomComponentComponent,
          },
          {
            path: 'popover-placements.component',
            component: NbPopoverPlacementsComponent,
          },
          {
            path: 'popover-modes.component',
            component: NbPopoverModesComponent,
          },
        ],
      },
      {
        path: 'checkbox',
        children: [
          {
            path: 'checkbox-test.component',
            component: NbCheckboxTestComponent,
          },
          {
            path: 'checkbox-showcase.component',
            component: NbCheckboxShowcaseComponent,
          },
          {
            path: 'checkbox-status.component',
            component: NbCheckboxStatusComponent,
          },
          {
            path: 'checkbox-disabled.component',
            component: NbCheckboxDisabledComponent,
          },
        ],
      },
      {
        path: 'spinner',
        children: [
          {
            path: 'spinner-card.component',
            component: NbSpinnerCardComponent,
          },
          {
            path: 'spinner-tabs.component',
            component: NbSpinnerTabsComponent,
          },
          {
            path: 'spinner-button.component',
            component: NbSpinnerButtonComponent,
          },
          {
            path: 'spinner-sizes.component',
            component: NbSpinnerSizesComponent,
          },
          {
            path: 'spinner-colors.component',
            component: NbSpinnerColorsComponent,
          },
        ],
      },
      {
        path: 'card',
        children: [
          {
            path: 'card-test.component',
            component: NbCardTestComponent,
          },
          {
            path: 'card-showcase.component',
            component: NbCardShowcaseComponent,
          },
          {
            path: 'card-full.component',
            component: NbCardFullComponent,
          },
          {
            path: 'card-colors.component',
            component: NbCardColorsComponent,
          },
          {
            path: 'card-accents.component',
            component: NbCardAccentsComponent,
          },
          {
            path: 'card-sizes.component',
            component: NbCardSizesComponent,
          },
        ],
      },
      {
        path: 'flip-card',
        children: [
          {
            path: 'flip-card-showcase.component',
            component: NbFlipCardShowcaseComponent,
          },
          {
            path: 'flip-card-full.component',
            component: NbFlipCardFullComponent,
          },
          {
            path: 'flip-card-colors.component',
            component: NbFlipCardColorsComponent,
          },
          {
            path: 'flip-card-accents.component',
            component: NbFlipCardAccentsComponent,
          },
          {
            path: 'flip-card-sizes.component',
            component: NbFlipCardSizesComponent,
          },
        ],
      },
      {
        path: 'reveal-card',
        children: [
          {
            path: 'reveal-card-full.component',
            component: NbRevealCardFullComponent,
          },
          {
            path: 'reveal-card-showcase.component',
            component: NbRevealCardShowcaseComponent,
          },
          {
            path: 'reveal-card-colors.component',
            component: NbRevealCardColorsComponent,
          },
          {
            path: 'reveal-card-accents.component',
            component: NbRevealCardAccentsComponent,
          },
          {
            path: 'reveal-card-sizes.component',
            component: NbRevealCardSizesComponent,
          },
          {
            path: 'reveal-card-full.component',
            component: NbRevealCardFullComponent,
          },
        ],
      },
      {
        path: 'alert',
        children: [
          {
            path: 'alert-test.component',
            component: NbAlertTestComponent,
          },
          {
            path: 'alert-showcase.component',
            component: NbAlertShowcaseComponent,
          },
          {
            path: 'alert-colors.component',
            component: NbAlertColorsComponent,
          },
          {
            path: 'alert-accents.component',
            component: NbAlertAccentsComponent,
          },
          {
            path: 'alert-sizes.component',
            component: NbAlertSizesComponent,
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: 'menu-showcase.component',
            component: NbMenuShowcaseComponent,
          },
          {
            path: 'menu-children.component',
            component: NbMenuChildrenComponent,
          },
        ],
      },
      {
        path: 'action',
        children: [
          {
            path: 'action-test.component',
            component: NbActionTestComponent,
          },
          {
            path: 'action-showcase.component',
            component: NbActionShowcaseComponent,
          },
          {
            path: 'action-sizes.component',
            component: NbActionSizesComponent,
          },
          {
            path: 'action-badge.component',
            component: NbActionBadgeComponent,
          },
          {
            path: 'action-width.component',
            component: NbActionWidthComponent,
          },
        ],
      },
      {
        path: 'tabset',
        children: [
          {
            path: 'tabset-test.component',
            component: NbTabsetTestComponent,
          },
          {
            path: 'tabset-test.component/:tab',
            component: NbTabsetTestComponent,
          },
          {
            path: 'tabset-showcase.component',
            component: NbTabsetShowcaseComponent,
          },
          {
            path: 'tabset-badge.component',
            component: NbTabsetBadgeComponent,
          },
          {
            path: 'tabset-width.component',
            component: NbTabsetWidthComponent,
          },
          {
            path: 'route-tabset-test.component',
            component: NbRouteTabsetTestComponent,
            children: [
              {
                path: '',
                redirectTo: 'tab1',
                pathMatch: 'full',
              },
              {
                path: 'tab1',
                component: NbRouteTabsetTestChild1Component,
              },
              {
                path: 'tab2',
                component: NbRouteTabsetTestChild2Component,
              },
            ],
          },
        ],
      },
      // {
      //   path: 'stepper',
      //   children: [
      //     {
      //       path: 'stepper-test.component',
      //       component: NbStepperTestComponent,
      //     },
      //     {
      //       path: 'stepper-showcase.component',
      //       component: NbStepperShowcaseComponent,
      //     },
      //     {
      //       path: 'stepper-validation.component',
      //       component: NbStepperValidationComponent,
      //     },
      //     {
      //       path: 'stepper-vertical.component',
      //       component: NbStepperVerticalComponent,
      //     },
      //   ],
      // },
      {
        path: 'user',
        children: [
          {
            path: 'user-showcase.component',
            component: NbUserShowcaseComponent,
          },
          {
            path: 'user-sizes.component',
            component: NbUserSizesComponent,
          },
        ],
      },
      {
        path: 'badge',
        children: [
          {
            path: 'badge-showcase.component',
            component: NbBadgeShowcaseComponent,
          },
        ],
      },
      {
        path: 'progress-bar',
        children: [
          {
            path: 'progress-bar-showcase.component',
            component: NbProgressBarShowcaseComponent,
          },
          {
            path: 'progress-bar-status.component',
            component: NbProgressBarStatusComponent,
          },
          {
            path: 'progress-bar-size.component',
            component: NbProgressBarSizeComponent,
          },
          {
            path: 'progress-bar-value.component',
            component: NbProgressBarValueComponent,
          },
          {
            path: 'progress-bar-interactive.component',
            component: NbProgressBarInteractiveComponent,
          },
        ],
      },
      {
        path: 'chat',
        children: [
          {
            path: 'chat-showcase.component',
            component: NbChatShowcaseComponent,
          },
          {
            path: 'chat-colors.component',
            component: NbChatColorsComponent,
          },
          {
            path: 'chat-sizes.component',
            component: NbChatSizesComponent,
          },
          {
            path: 'chat-drop.component',
            component: NbChatDropComponent,
          },
          {
            path: 'chat-message-types-showcase.component',
            component: NbChatMessageTypesShowcaseComponent,
          },
          {
            path: 'chat-conversation-showcase.component',
            component: NbChatConversationShowcaseComponent,
          },
          {
            path: 'chat-test.component',
            component: NbChatTestComponent,
          },
        ],
      },
      {
        path: 'accordion',
        children: [
          {
            path: 'accordion-showcase.component',
            component: NbAccordionShowcaseComponent,
          },
          {
            path: 'accordion-multi.component',
            component: NbAccordionMultiComponent,
          },
          {
            path: 'accordion-toggle.component',
            component: NbAccordionToggleComponent,
          },
          {
            path: 'accordion-test.component',
            component: NbAccordionTestComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: NbPlaygroundBaseComponent,
    children: [
      {
        path: 'context-menu',
        children: [
          {
            path: 'context-menu-test.component',
            component: NbContextMenuTestComponent,
          },
          {
            path: 'context-menu-showcase.component',
            component: NbContextMenuShowcaseComponent,
          },
          {
            path: 'context-menu-click.component',
            component: NbContextMenuClickComponent,
          },
        ],
      },
      {
        path: 'layout',
        children: [
          {
            path: 'layout-test.component',
            component: NbLayoutTestComponent,
          },
          {
            path: 'layout-header-test.component',
            component: NbLayoutHeaderTestComponent,
          },
          {
            path: 'layout-footer-test.component',
            component: NbLayoutFooterTestComponent,
          },
          {
            path: 'theme-change-test.component',
            component: NbThemeChangeTestComponent,
          },
          {
            path: 'theme-dynamic-test.component',
            component: NbThemeDynamicTestComponent,
          },
          {
            path: 'theme-breakpoint-test.component',
            component: NbThemeBreakpointTestComponent,
          },
          {
            path: 'layout-showcase.component',
            component: NbLayoutShowcaseComponent,
          },
          {
            path: 'layout-w-footer.component',
            component: NbLayoutWFooterComponent,
          },
          {
            path: 'layout-fixed-header.component',
            component: NbLayoutFixedHeaderComponent,
          },
          {
            path: 'layout-sidebar-subheader.component',
            component: NbLayoutSidebarSubheaderComponent,
          },
          {
            path: 'layout-subheader.component',
            component: NbLayoutSubheaderComponent,
          },
          {
            path: 'layout-column-left.component',
            component: NbLayoutColumnLeftComponent,
          },
        ],
      },
      {
        path: 'sidebar',
        children: [
          {
            path: 'sidebar-test.component',
            component: NbSidebarTestComponent,
          },
          {
            path: 'sidebar-one-test.component',
            component: NbSidebarOneTestComponent,
          },
          {
            path: 'sidebar-two-test.component',
            component: NbSidebarTwoTestComponent,
          },
          {
            path: 'sidebar-three-test.component',
            component: NbSidebarThreeTestComponent,
          },
          {
            path: 'sidebar-showcase.component',
            component: NbSidebarShowcaseComponent,
          },
          {
            path: 'sidebar-compacted.component',
            component: NbSidebarCompactedComponent,
          },
          {
            path: 'sidebar-right.component',
            component: NbSidebarRightComponent,
          },
          {
            path: 'sidebar-toggle.component',
            component: NbSidebarToggleComponent,
          },
          {
            path: 'sidebar-fixed.component',
            component: NbSidebarFixedComponent,
          },
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: 'search-test.component',
            component: NbSearchTestComponent,
          },
          {
            path: 'search-customized-test.component',
            component: NbSearchCustomizedTestComponent,
          },
          {
            path: 'search-showcase.component',
            component: NbSearchShowcaseComponent,
          },
          {
            path: 'search-event.component',
            component: NbSearchEventComponent,
          },
        ],
      },
      {
        path: 'user',
        children: [
          {
            path: 'user-test.component',
            component: NbUserTestComponent,
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: 'menu-test.component',
            component: NbMenuTestComponent,
            children: [
              {
                path: '',
                redirectTo: '1',
                pathMatch: 'full',
              },
              {
                path: '1',
                component: NbMenuItem1Component,
              },
              {
                path: '2',
                component: NbMenuItem2Component,
              },
              {
                path: '12',
                component: NbMenuItem1Component,
              },
              {
                path: '3',
                component: NbMenuItem3Component,
                children: [
                  {
                    path: '',
                    redirectTo: '1',
                    pathMatch: 'full',
                  },
                  {
                    path: '1',
                    component: NbMenuItem31Component,
                  },
                  {
                    path: '2',
                    component: NbMenuItem32Component,
                  },
                  {
                    path: '3',
                    component: NbMenuItem33Component,
                    children: [
                      {
                        path: '',
                        redirectTo: '1',
                        pathMatch: 'full',
                      },
                      {
                        path: '1',
                        component: NbMenuItem331Component,
                      },
                      {
                        path: '2',
                        component: NbMenuItem332Component,
                      },
                    ],
                  },
                ],
              },
              {
                path: '4',
                component: NbMenuItem4Component,
              },
            ],
          },
        ],
      },
      {
        path: 'bootstrap',
        children: [
          {
            path: 'bootstrap-test.component',
            component: NbBootstrapTestComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'ss',
    component: NbPlaygroundBaseComponent,
    children: [
      {
        path: 'context-helper',
        children: [
          {
            path: 'context-helper-test.component',
            component: AFContextHelperTestComponent,
          },
        ],
      },
      {
        path: 'paginator',
        children: [
          {
            path: 'paginator-test',
            component: AFPaginatorComponent,
          },
        ],
      },
    ]
  }, 
  {
    path: 'oauth2',
    loadChildren: './auth/oauth2/oauth2.module#NbOAuth2PlaygroundModule',
  },
  {
    path: 'oauth2-password',
    loadChildren: './auth/oauth2-password/oauth2-password.module#NbOAuth2PasswordPlaygroundModule',
  },
  {
    path: 'validation',
    children: [
      {
        path: 'validation-test',
        component: ValidationComponent,
      },
    ]
  },
  // AFPaginatorComponent
  // {
  //   path: '',
  //   loadChildren: './auth/auth.module#NbAuthPlaygroundModule',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NbPlaygroundRoutingModule {
}
