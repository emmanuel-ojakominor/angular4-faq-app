import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'faq-questions',
  templateUrl: './faq-directory.component.html',
  styleUrls: ['./faq-directory.component.scss']
})
export class FaqDirectoryComponent implements OnInit {
  faqs: Object[];

  constructor(private questionService: QuestionsService) {
     this.questionService.getQuestions() 
        .subscribe(faqs => { 
            this.faqs = faqs; 
        });
  }

  ngOnInit() {
  }

}
