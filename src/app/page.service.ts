import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Page } from './page';
import { PAGES } from './pages';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }
  
  getPages(): Observable<Page[]> {
    return of(PAGES);
  }
}
