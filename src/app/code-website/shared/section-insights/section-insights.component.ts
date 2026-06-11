import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { InsightService } from '../../../services/Insight.service';
import { Subscription } from 'rxjs';
import { InsightDto } from '../../../models/Insight/Insight.modal';

@Component({
  selector: 'app-section-insights',
  imports: [
    SlickCarouselModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './section-insights.component.html',
  styleUrl: './section-insights.component.css'
})
export class SectionInsightsComponent implements OnInit, OnDestroy {
  @ViewChild('slickModalInsight') slickModalInsight!: SlickCarouselComponent;

  rawInsights: InsightDto[] = []; 
  translatedInsights: any[] = []; 
  
  private langChangeSubscription!: Subscription;

  slideConfigInsights = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      { breakpoint: 1229, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  constructor(
    private translate: TranslateService,
    private insightService: InsightService
  ) {}

  ngOnInit() {
    this.fetchInsights(); 

    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.mapInsights();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  fetchInsights() {
    this.insightService.getAllInsights('', 1, 10, '').subscribe({
      next: (res) => {
        if (res && res.insights && res.insights.data) {
          this.rawInsights = res.insights.data.filter(insight => !insight.archived);
          this.mapInsights(); 
        }
      },
      error: (err) => console.error('Error fetching insights:', err)
    });
  }

  mapInsights() {
    const currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';

    this.translatedInsights = this.rawInsights.map(insight => ({
      image: `https://localhost:7265/images/${insight.imagePath}`,
      date: insight.publishedDate,
      category: currentLang === 'ar' ? insight.category_ar : insight.category,
      title: currentLang === 'ar' ? insight.title_ar : insight.title,
      description: currentLang === 'ar' ? insight.description_ar : insight.description,
      linkPost: insight.linkPost
    }));
  }

  nextSlideInsight() {
    if (this.slickModalInsight) this.slickModalInsight.slickNext();
  }

  prevSlideInsight() {
    if (this.slickModalInsight) this.slickModalInsight.slickPrev();
  }
}