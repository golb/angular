import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() items: [];

  constructor() { }

  ngOnInit() {
  }
  
  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
