import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-news-details',
  imports: [],
  templateUrl: './our-news-details.component.html',
  styleUrl: './our-news-details.component.css'
})
export class OurNewsDetailsComponent implements OnInit {
  newsId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.paramMap.get('id')!;
  }
}
