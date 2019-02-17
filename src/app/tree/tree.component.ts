import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Node } from '../node';
import { PiLeaderLineOptions, PiLeaderLinePath, PiLeaderLineSocket } from '@ping/pi-leader-line';
import { PiTreeChartComponent } from '@ping/pi-tree-chart';
import { NodeData, UserNodeRelationData } from 'projects/delve-tree-chart-api/src/public_api';
import { PiIframeComponent } from '@ping/pi-iframe';

@Component({
  selector: 'delve-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  @Input() piIframe: PiIframeComponent;
  @Input() nodeData: NodeData;
  @Input() relationsData: UserNodeRelationData[];

  @ViewChild('tree', { read: PiTreeChartComponent }) tree: PiTreeChartComponent;

  datasource: Node;
  relationsByNodeId: { [key: number]: UserNodeRelationData } = {};

  readonly lineOptions: PiLeaderLineOptions = {
    startSocket: PiLeaderLineSocket.BOTTOM,
    endSocket: PiLeaderLineSocket.TOP,
    endSocketGravity: [0, -50],
    path: PiLeaderLinePath.FLUID,
    color: 'green',
    dropShadow: {
      opacity: 0.2
    }
  };

  constructor() { }

  ngOnInit() {
    this.relationsData = this.relationsData ? this.relationsData : [];
    this.datasource = this.createOrgChartDataFrom(this.nodeData);
    this.mapRelationsByNodeId();
    this.initializeRelations(this.datasource);
  }

  private createOrgChartDataFrom(nodeDto: NodeData, parentNode?: Node): Node {
    const node: Node = new Node(nodeDto.id, nodeDto.title, nodeDto.description, nodeDto.imageUrl, parentNode, null);
    const children: Node[] = nodeDto.children.map(childNode => this.createOrgChartDataFrom(childNode, node));
    node.setChildren(children);

    return node;
  }

  private mapRelationsByNodeId(): void {
    this.relationsData.forEach(relation => {
      this.relationsByNodeId[relation.nodeId] = relation;
    });
  }

  private initializeRelations(node: Node): void {
    node.children.forEach(child => this.initializeRelations(child));
    if (this.relationsByNodeId[node.id]) {
      node.setVisited(this.relationsByNodeId[node.id].visited);
    }
  }
}
