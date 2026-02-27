import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-section-insights',
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './section-insights.component.html',
  styleUrl: './section-insights.component.css'
})
export class SectionInsightsComponent {
// Slider Insights
  @ViewChild('slickModalInsight') slickModalInsight!: SlickCarouselComponent;

 Insights = [
  { 
    image: 'assets/images/HomePage/AISecurityManagement.png',
    date: 'Jan 21, 2026',
    category: 'AI Security',
    title: 'AI Security Management',
    description: 'Modern security requires more than cameras. Explore how our integrated AI stack strengthens real-world security operations.',
    linkPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7420095421529624576'
  },
  { 
    image: 'assets/images/HomePage/AIFacilityManagement.png',
    date: 'Feb 26, 2026',
    category: 'Facility Management',
    title: 'AI Facility Management',
    description: 'Facility management is no longer manual. See how AI enables measurable improvements across operations, energy, and asset management.',
    linkPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7433132870883438592'
  },
  { 
    image: 'assets/images/HomePage/EnterpriseArchitecture.png',
    date: 'Feb 14, 2026',
    category: 'Enterprise Architecture',
    title: 'Enterprise Architecture',
    description: 'Enterprise Architecture without blind spots. Explore how dynamic modeling transforms decision-making.',
    linkPost: 'https://www.linkedin.com/posts/advance-code-it_code-ea-modeling-with-abacus-tool-activity-7428865048657309697-8AsK?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvrFQ0Bm7FNLKoS8qTrLMiHNk6bvq-1Kts'
  },
  { 
    image: 'assets/images/HomePage/DigitalTwin.png',
    date: 'Jan 13, 2026',
    category: 'Digital Twin',
    title: 'Digital Twin',
    description: 'Your infrastructure deserves a live intelligence layer. Discover the end-to-end AI Digital Twin journey.',
    linkPost: 'https://www.linkedin.com/posts/advance-code-it_code-ai-digital-twin-end-to-end-delivery-activity-7417180625364738049-kuAL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACvrFQ0Bm7FNLKoS8qTrLMiHNk6bvq-1Kts'
  }
];

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

  nextSlideInsight() {
    this.slickModalInsight.slickNext();
  }

  prevSlideInsight() {
    this.slickModalInsight.slickPrev();
  }
}
