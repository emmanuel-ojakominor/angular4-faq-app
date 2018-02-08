import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class QuestionsService {
  
  constructor(public http: Http) { }
  
  getQuestions() {
    return this.http.get('../../assets/faqs.json')
      .map(res => res.json());
  }
}
