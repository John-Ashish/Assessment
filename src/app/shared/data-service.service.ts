import {Injectable, OnInit} from '@angular/core';
import {CourseSearchResultList} from "./data.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements OnInit {

  getUrl: string = 'https://lx.festo.com/SearchService/api/search/learning-paths/public';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchResponses();
  }

  fetchResponses() {
    return this.http.get<CourseSearchResultList>(this.getUrl);
  }
}
