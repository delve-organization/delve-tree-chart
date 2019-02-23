import { PiIframeComponent } from '@ping/pi-iframe';
import { NODE_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_INPUT_KEY, APP_MODE_KEY, AppMode } from 'projects/delve-tree-chart-api/src/public_api';

export class AppTester {

    constructor(private piIframe: PiIframeComponent) {    
    }

    public postInitialData(): void {
        this.piIframe.post(NODE_DATA_INPUT_KEY, TEST_DATA);
        this.piIframe.post(USER_NODE_RELATION_DATA_INPUT_KEY, []);
        this.piIframe.post(APP_MODE_KEY, AppMode.SELECTOR);
    }
}

const TEST_DATA = {
  "id": 1,
  "title": "ROOT",
  "description": "Description of ROOT",
  "imageUrl": "https://localhost:4300/public/images/fat_cat.png",
  "children": [
    {
      "id": 2,
      "title": "LEVEL_1_0",
      "description": "Description of LEVEL_1_0",
      "imageUrl": null,
      "children": [
        {
          "id": 4,
          "title": "LEVEL_2_0",
          "description": "Description of LEVEL_2_0",
          "imageUrl": null,
          "children": []
        },
        {
          "id": 5,
          "title": "LEVEL_2_1",
          "description": "Description of LEVEL_2_1",
          "imageUrl": null,
          "children": []
        }
      ]
    },
    {
      "id": 3,
      "title": "LEVEL_1_1",
      "description": "Description of LEVEL_1_1",
      "imageUrl": null,
      "children": [
        {
          "id": 6,
          "title": "LEVEL_2_2",
          "description": "Description of LEVEL_2_2",
          "imageUrl": null,
          "children": [
            {
              "id": 7,
              "title": "LEVEL_3_0",
              "description": "Description of LEVEL_3_0",
              "imageUrl": null,
              "children": [
                {
                  "id": 10,
                  "title": "LEVEL_4_0",
                  "description": "Description of LEVEL_4_0",
                  "imageUrl": null,
                  "children": []
                },
                {
                  "id": 11,
                  "title": "LEVEL_4_1",
                  "description": "Description of LEVEL_4_1",
                  "imageUrl": null,
                  "children": []
                }
              ]
            },
            {
              "id": 8,
              "title": "LEVEL_3_1",
              "description": "Description of LEVEL_3_1",
              "imageUrl": null,
              "children": []
            },
            {
              "id": 9,
              "title": "LEVEL_3_2",
              "description": "Description of LEVEL_3_2",
              "imageUrl": null,
              "children": [
                {
                  "id": 12,
                  "title": "LEVEL_4_2",
                  "description": "Description of LEVEL_4_2",
                  "imageUrl": null,
                  "children": []
                },
                {
                  "id": 13,
                  "title": "LEVEL_4_3",
                  "description": "Description of LEVEL_4_3",
                  "imageUrl": "https://localhost:4300/public/images/fat_cat.png",
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
