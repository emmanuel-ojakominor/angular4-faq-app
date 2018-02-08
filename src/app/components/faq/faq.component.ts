import { Component, OnInit, Input } from '@angular/core';
import { FAQ } from '../../models/FAQ';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input('faq') faq: FAQ;
  @Input('i') i: number;

  constructor() { }

  ngOnInit() {
  }

}
