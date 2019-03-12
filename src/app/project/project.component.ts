import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BehanceService } from '../behance.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  project: Object;
  projectId: number;
  isProjectLoaded: boolean = false;
  errorCode: number;
  errorText: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private behanceService: BehanceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.projectId = params.id;
        this.getProject();
      });
  }
  
  getProject(): void {
    this.behanceService.getProject(this.projectId).subscribe(
    data => this.project = data,
    err => {
    this.errorCode = err.status;
    this.errorText = err.statusText;
    console.log(err);
  },
    () => this.isProjectLoaded = true);
  }
  
  goBack(): void {
    this.location.back();
  }

}
