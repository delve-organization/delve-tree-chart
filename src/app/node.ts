import {PiTreeChartNodeComponent} from '@ping/pi-tree-chart';

export class Node {

  private _id: number;
  private _title: string;
  private _description: string;
  private _imageUrl: string;
  private _parent: Node;
  private _children: Array<Node>;
  private _visited: boolean;
  private _nodeComponent: PiTreeChartNodeComponent;

  constructor(id: number, title: string, description: string, imageFile: string, parent: Node, children: Array<Node>) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._imageUrl = imageFile;
    this._parent = parent;
    this._children = children;
    this._visited = false;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get parent(): Node {
    return this._parent;
  }

  get children(): Array<Node> {
    return this._children;
  }

  get visited(): boolean {
    return this._visited;
  }

  public setChildren(children: Array<Node>): void {
    this._children = children;
  }

  public setVisited(visited: boolean): void {
    this._visited = visited;
    if (this.parent) {
      this.parent.updateVisitedStatus();
    }
  }

  public setNodeComponent(nodeComponent: PiTreeChartNodeComponent): void {
    this._nodeComponent = nodeComponent;
  }

  public updateComponent(recursive?: boolean): void {
    if (this.visited) {
      this._nodeComponent.setParentConnector({color: 'gray', dash: true});
    } else {
      this._nodeComponent.setParentConnector({color: 'green', dash: false});
    }
    if (recursive && this.parent) {
      this.parent.updateComponent(recursive);
    }
  }

  private updateVisitedStatus(): void {
    const isAllChildrenVisited: boolean = this.children && this.children.length ?
      this.children.every(child => child.visited) : false;
    this.setVisited(isAllChildrenVisited);
  }
}
