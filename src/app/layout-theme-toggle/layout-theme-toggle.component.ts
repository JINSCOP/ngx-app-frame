import { Component } from '@angular/core';
import { NbThemeService } from '@ngx-app-frame/theme';

@Component({
  selector: 'nb-layout-theme-toggle',
  styleUrls: ['./layout-theme-toggle.component.scss'],
  template: `
    <div dir="ltr">
      <button (click)="enable('cosmic')">Cosmic</button>
      <button (click)="enable('default')">Default</button>
      <button (click)="enable('corporate')">Corporate</button>
      <button pButton type="button" (click)="visibleSidebar1 = true" label="弹出列表，方便测试"></button>
    </div>
    <p-sidebar [(visible)]="visibleSidebar1" [baseZIndex]="10000">
      <h1 style="font-weight:normal" style="color: #2a2a2a;">列表</h1>
    
    </p-sidebar>
  `,
})
export class NbLayoutThemeToggleComponent {
  visibleSidebar1: boolean;
  // <button pButton type="button" (click)="visibleSidebar1 = false" label="Save" class="ui-button-success"></button>
  // <button pButton type="button" (click)="visibleSidebar1 = false" label="Cancel" class="ui-button-secondary"></button>
  // <nb-menu[items]="items"> </nb-menu>
  data: any;
  constructor(private themeService: NbThemeService) { }

  ngOnInit() {
    this.data = [
      {
        title: "home",
        link: '/'
      },
      {
        title: "dashboard",
        link: '/'
      }
    ];
  }

  enable(theme: string) {
    console.log("-----选择了主题：", theme);
    this.themeService.changeTheme(theme);
  }

  popBox() {
    console.log(1);

  }
}
