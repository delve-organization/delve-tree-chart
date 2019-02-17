import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { PiLeaderLineModule } from '@ping/pi-leader-line';
import { PiTreeChartModule } from '@ping/pi-tree-chart';
import { PiIframeModule } from '@ping/pi-iframe';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    PiLeaderLineModule,
    PiTreeChartModule,
    PiIframeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
