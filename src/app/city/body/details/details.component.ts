import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeviewItem, TreeviewI18n, TreeviewConfig,
   TreeviewHelper, TreeviewComponent,
    TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem
      } from 'ngx-treeview';
import { isNil, remove, reverse } from 'lodash';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;

  items: TreeviewItem[]
   fruitCategory = new TreeviewItem({
    text: 'Fruit', value: 1, children: [
        { text: 'Apple', value: 11 },
        { text: 'Mango', value: 12 }
    ]
});
 vegetableCategory = new TreeviewItem({
    text: 'Vegetable', value: 2, children: [
        { text: 'Salad', value: 21 },
        { text: 'Potato', value: 22 }
    ]
});
row=[];

dropdownEnabled = true;
values: number[];
config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
    maxHeight: 400
});

buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
];
buttonClass = this.buttonClasses[0];

    constructor(

    ) { }

    ngOnInit() {
      this.items= [this.fruitCategory, this.vegetableCategory];
    this.vegetableCategory.children.push(new TreeviewItem({ text: 'Mushroom', value: 23, checked: false }));
    this.vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
  }
  
    onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
      this.row=[];
      console.log(this.items);
      console.log(downlineItems);
      downlineItems.forEach(downlineItem => {
         this.findObjectByLabel(this.items,downlineItem);
      });
    }
    letsUpdate(input){
      this.row.push(input);
    }
  findObjectByLabel = (obj, val)=> {
          obj.forEach(element => {
            if (element.value === val){
               this.letsUpdate(element);
             }
             else{          
               if(typeof element.internalChildren === 'object'){
                  this.findObjectByLabel(element.internalChildren, val);
                }
            }
          });     
      }
}
