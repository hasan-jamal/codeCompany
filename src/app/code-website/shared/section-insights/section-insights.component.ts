import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

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
export class SectionInsightsComponent {
// Slider Insights
 @ViewChild('slickModalInsight') slickModalInsight!: SlickCarouselComponent;

  Insights = [
    { 
      image: 'assets/images/HomePage/AISecurityManagement.png',
      date: 'INSIGHTS_SECTION.ITEMS.ITEM_1.DATE',
      category: 'INSIGHTS_SECTION.ITEMS.ITEM_1.CATEGORY',
      title: 'INSIGHTS_SECTION.ITEMS.ITEM_1.TITLE',
      description: 'INSIGHTS_SECTION.ITEMS.ITEM_1.DESC',
      linkPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7420095421529624576'
    },
    { 
      image: 'assets/images/HomePage/AIFacilityManagement.png',
      date: 'INSIGHTS_SECTION.ITEMS.ITEM_2.DATE',
      category: 'INSIGHTS_SECTION.ITEMS.ITEM_2.CATEGORY',
      title: 'INSIGHTS_SECTION.ITEMS.ITEM_2.TITLE',
      description: 'INSIGHTS_SECTION.ITEMS.ITEM_2.DESC',
      linkPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7433132870883438592'
    },
    { 
      image: 'assets/images/HomePage/EnterpriseArchitecture.png',
      date: 'INSIGHTS_SECTION.ITEMS.ITEM_3.DATE',
      category: 'INSIGHTS_SECTION.ITEMS.ITEM_3.CATEGORY',
      title: 'INSIGHTS_SECTION.ITEMS.ITEM_3.TITLE',
      description: 'INSIGHTS_SECTION.ITEMS.ITEM_3.DESC',
      linkPost: 'https://www.linkedin.com/posts/advance-code-it_code-ea-modeling-with-abacus-tool-activity-7428865048657309697-8AsK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvrFQ0Bm7FNLKoS8qTrLMiHNk6bvq-1Kts'
    },
    { 
      image: 'assets/images/HomePage/DigitalTwin.png',
      date: 'INSIGHTS_SECTION.ITEMS.ITEM_4.DATE',
      category: 'INSIGHTS_SECTION.ITEMS.ITEM_4.CATEGORY',
      title: 'INSIGHTS_SECTION.ITEMS.ITEM_4.TITLE',
      description: 'INSIGHTS_SECTION.ITEMS.ITEM_4.DESC',
      linkPost: 'https://www.linkedin.com/posts/advance-code-it_code-ai-digital-twin-end-to-end-delivery-activity-7417180625364738049-kuAL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvrFQ0Bm7FNLKoS8qTrLMiHNk6bvq-1Kts'
    }
  ];

  translatedInsights: any[] = [];

  slideConfigInsights = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    dots: false,
    infinite: true,
    responsive: [
      { breakpoint: 1229, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translateInsights();

    this.translate.onLangChange.subscribe(() => {
      this.translateInsights();
    });
  }

  translateInsights() {
    this.translatedInsights = this.Insights.map(insight => ({
      ...insight,
      date: this.translate.instant(insight.date),
      category: this.translate.instant(insight.category),
      title: this.translate.instant(insight.title),
      description: this.translate.instant(insight.description)
    }));
  }

  nextSlideInsight() {
    this.slickModalInsight.slickNext();
  }

  prevSlideInsight() {
    this.slickModalInsight.slickPrev();
  }
}
