import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const API_KEY = 'A3cKS4O4DDWj6ovROnuZex7iljulinU5';

@Injectable({
  providedIn: 'root'
})
export class BehanceService {

  constructor(private http: HttpClient) { } 
    
  getProjects(pageId: number = 1, searchWord: string) {
    return this.http.get('/api_behance/v2/projects?q=' + searchWord + '&api_key=' + API_KEY + '&page=' + pageId);
  }
  
  getProject(projectId: number) {
    return this.http.get('/api_behance/v2/projects/' + projectId + '?api_key=' + API_KEY);
  }
}
