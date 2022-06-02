import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CourseSearchResult} from "../shared/data.model";
import {DataServiceService} from "../shared/data-service.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  searchText:string = '';
  responses: CourseSearchResult[] = [];

  constructor(
    private http: HttpClient,
    private dataResponse: DataServiceService
              ) { }

  ngOnInit(): void {
    this.dataResponse.fetchResponses().subscribe((response) => {
      this.responses = response.publicLearningPathResults;
    });
  }

  fetchImage(course: CourseSearchResult): string{
    if(course.images?.original === undefined) {
      return "./assets/NullImage.jpg";
    } else {
      return course.images?.original;
    }
  }

}

