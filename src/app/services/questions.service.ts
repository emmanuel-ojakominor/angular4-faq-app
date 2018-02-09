import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FAQ } from '../models/FAQ';

@Injectable()
export class QuestionsService {
  faqs: FAQ[];

  constructor(public http: Http) { }
  
  // Get faqs from local stroage (LS)
  getQuestions() {
    /** 
    - To store the faqs in local storage it has to be stored as a string, so before we store it into local storage, we have to change data array to a string.
    - When we pull the data out of localStroage we have to change it from string back to an array. 
    - This is done by using two different functions:
    1) JSON.stringify(), to make it a string.
    2) JSON.parse(), to make it back to JSON. 
    */
    if ( localStorage.getItem('faqs') === null ) {
      this.faqs = [];
    } else {
      /*
       Recall, when we take something from localStorage, it's in string format, and we dont want that. We have to convert the string data into JSON using JSON.parse(). 
       */
      this.faqs = JSON.parse(localStorage.getItem('faqs'));  
    }
  
    return this.faqs;
  } 
  
  // Add faqs to local storage (LS)
  addFaq(faq: FAQ) {
      this.faqs.unshift(faq);
      
      // Initialize local var
      let faqs;

      if ( localStorage.getItem('faqs') === null ) {
          faqs = [];
          // Push new faq
          faqs.unshift(faq);
          // Set new array to LS
          localStorage.setItem('faqs', JSON.stringify(faqs));
      } else { 
          faqs = JSON.parse(localStorage.getItem('faqs'));
          // Add new faq
          faqs.unshift(faq);
          // Reset LS
          localStorage.setItem('faqs', JSON.stringify(faqs));
      }
  }
  
  // delete faqs from local storage (LS)
  deleteFaq(faq) {
      for (let i = 0; i < this.faqs.length; i++) {
        if (faq == this.faqs[i]) {
          this.faqs.splice(i, 1);
          localStorage.setItem('faqs', JSON.stringify(this.faqs));
        }
      }
  }
}
 