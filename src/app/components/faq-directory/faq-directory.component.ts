import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { FAQ } from '../../models/FAQ';

@Component({
  selector: 'faq-questions',
  templateUrl: './faq-directory.component.html',
  styleUrls: ['./faq-directory.component.scss']
})
export class FaqDirectoryComponent implements OnInit {
  faqs: FAQ[];

  constructor(private questionService: QuestionsService) {
     this.questionService.getQuestions() 
        .subscribe(faqs => { 
            this.faqs = faqs; 
        });
  }

  ngOnInit() {
  }

}
