import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Node } from '../node';
import { PiTreeChartNodeComponent } from '@ping/pi-tree-chart';
import { UserNodeRelationData, USER_NODE_RELATION_DATA_CHANGE_KEY } from 'projects/delve-tree-chart-api/src/public_api';
import { PiIframeComponent } from '@ping/pi-iframe';

@Component({
  selector: 'delve-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit, AfterViewInit {

  @Input() piIframe: PiIframeComponent;
  @Input() node: Node;
  @Input() component: PiTreeChartNodeComponent;

  showChildren: boolean;

  constructor() {
  }

  ngOnInit() {
    this.showChildren = this.node.parent === undefined;
    this.piIframe.listen<UserNodeRelationData>(USER_NODE_RELATION_DATA_CHANGE_KEY, (relation: UserNodeRelationData) => {
      if (this.node.id === relation.nodeId) {
        this.node.setVisited(relation.visited);
        this.node.updateComponent(true);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.node.setNodeComponent(this.component);
      this.node.updateComponent();
    });
  }

  toggleVisitedStatus(): void {
    this.piIframe.post<UserNodeRelationData>(USER_NODE_RELATION_DATA_CHANGE_KEY, {
      nodeId: this.node.id,
      visited: !this.node.visited
    });
  }

  toggleChildren(): void {
    this.showChildren = !this.showChildren;
    if (this.showChildren === true) {
      this.component.showChildren();
    } else {
      this.component.hideChildren();
    }
  }

  imageLoaded(): void {
    this.component.rePositionChildConnectors(true);
  }
}
