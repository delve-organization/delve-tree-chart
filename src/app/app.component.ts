import { Component, OnInit, ViewChild } from '@angular/core';
import { PiIframeComponent } from '@ping/pi-iframe';
import { NodeData, NODE_DATA_INPUT_KEY, UserNodeRelationData, USER_NODE_RELATION_DATA_INPUT_KEY, APP_LOADED_KEY, AppMode, APP_MODE_KEY } from 'projects/delve-tree-chart-api/src/public_api';
import { AppTester } from './app-tester';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('piIframe', { read: PiIframeComponent }) piIframe: PiIframeComponent;

  node: NodeData;
  relations: UserNodeRelationData[];
  appMode: AppMode;

  ngOnInit() {
    this.piIframe.post<{}>(APP_LOADED_KEY, {});

    this.piIframe.listen<NodeData>(NODE_DATA_INPUT_KEY, (node: NodeData) => {
      this.node = node;
    });
    this.piIframe.listen<UserNodeRelationData[]>(USER_NODE_RELATION_DATA_INPUT_KEY, (relations: UserNodeRelationData[]) => {
      this.relations = relations;
    });
    this.piIframe.listen<AppMode>(APP_MODE_KEY, (mode: AppMode) => {
      this.appMode = mode;
    });

    //const appTester: AppTester = new AppTester(this.piIframe);
    //appTester.postInitialData();
  }
}
