import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css',
                  '../../../../assets/css/general.css',
                  '../../../../assets/css/sections/contactSection.css',
                  '../../../../assets/css/sections/ourServiceFlow.css'
  ],
  encapsulation: ViewEncapsulation.None,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceDetailsComponent implements OnInit{
  newsId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.paramMap.get('id')!;
  }
}
