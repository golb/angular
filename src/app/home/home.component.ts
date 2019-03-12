import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from '../page';

import { BehanceService } from '../behance.service';
import { PageService } from '../page.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Object;
  isProjectsLoaded: boolean = false;
  errorCode: number;
  errorText: string;
  pageId: number = 1;
  pages: Page[];
  searchWord: string = 'apartment';  

  constructor(
   private route: ActivatedRoute, 
   private behanceService: BehanceService,
   private pageService: PageService) { }

   ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.isProjectsLoaded = false;
        this.pageId = params.page_id;
        this.getProjects();
      });

    this.getPages();
  };

  getProjects(): void {
    this.behanceService.getProjects(this.pageId, this.searchWord).subscribe(
      data => this.items = data,
      err => {
        this.errorCode = err.status;
        this.errorText = err.statusText;
        console.log(err);
      },
      () => this.isProjectsLoaded = true);
  };
  
  getPages(): void {
    this.pageService.getPages().subscribe(pages => this.pages = pages);
  };

  onEnter(query: string) {
    this.searchWord = query;
    this.getProjects();
  }
}
