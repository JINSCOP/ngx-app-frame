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
    </div>
  `,
})
export class NbLayoutThemeToggleComponent {
  constructor(private themeService: NbThemeService) {}

  enable(theme: string) {
    console.log("-----选择了主题：",theme);
    this.themeService.changeTheme(theme);
  }
}
