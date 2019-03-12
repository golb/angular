import { Component, Input, OnInit } from '@angular/core';

import { Page } from '../page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {  
  @Input() pages: Page[];

  constructor() { }

  ngOnInit() {
  }

}
