import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {
  public doughnutChartPluginsFirst;
  public doughnutChartPluginsSecond;
  public doughnutChartPluginsTree;
  constructor (public dataService: DataService){
    this.doughnutChartPluginsFirst = dataService.doughnutChartPluginsFirst;
    this.doughnutChartPluginsSecond = dataService.doughnutChartPluginsFirst;
    this.doughnutChartPluginsTree = dataService.doughnutChartPluginsFirst;
  }
  public doughnutChartLabelsFirst: Label[] =
  ['Smartphone', 'Tablet'];
  public doughnutChartDataFirst: MultiDataSet = [
    [80000, 120000]
  ];
  public chartColorsFirst: any[] = [
  { 
    backgroundColor:["#0B3B0B", "#81F781", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
  }];

  public doughnutChartTypeFirst: ChartType = 'doughnut';

  public doughnutChartLabelsSecond: Label[] =
  ['Smartphone', 'Tablet'];
  public doughnutChartDataSecond: MultiDataSet = [
    [30000000,20000000]
  ];
  public chartColorsSecond: any[] = [
  { 
    backgroundColor:["#0A0A2A", "#2E9AFE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
  }];

  public doughnutChartTypeSecond: ChartType = 'doughnut';

  public doughnutChartLabelsTree: Label[] =
  ['Smartphone', 'Tablet'];
  public doughnutChartDataTree: MultiDataSet = [
    [120000,480000 ]
  ];
  public chartColorsTree: any[] = [
  { 
    backgroundColor:["#61210B", "#FFBF00", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
  }];

  public doughnutChartTypeTree: ChartType = 'doughnut';


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
