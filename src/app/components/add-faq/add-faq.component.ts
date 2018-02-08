import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FAQ } from '../../models/FAQ';

@Component({
  selector: 'add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss']
})
export class AddFaqComponent implements OnInit {
  @Output() newFaq = new EventEmitter<FAQ>();
  question: string;
  answer: string;

  constructor() { }

  ngOnInit() {
  }
  
  addFaq() {
    this.newFaq.emit({
        question: this.question,
        answer: this.answer
    })
  }
}
