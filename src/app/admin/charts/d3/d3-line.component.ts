import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent implements OnDestroy {
  multi = [
    {
      name: 'Название7',
      series: [
        {
          name: 'Название8',
          value: 7300,
        },
        {
          name: 'Название9',
          value: 8940,
        },
      ],
    },
    {
      name: 'Название5',
      series: [
        {
          name: 'Название3',
          value: 7870,
        },
        {
          name: 'Название4',
          value: 8270,
        },
      ],
    },
    {
      name: 'Название6',
      series: [
        {
          name: 'Название1',
          value: 5002,
        },
        {
          name: 'Название2',
          value: 5800,
        },
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Название';
  showYAxisLabel = true;
  yAxisLabel = 'Название';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
