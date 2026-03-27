import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, ViewEncapsulation,CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { ModalService } from '../../../../services/ModalService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SectionInsightsComponent } from '../../../shared/section-insights/section-insights.component';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';

let isFirstLoad = true;

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule, 
    SlickCarouselModule,
    SectionInsightsComponent,
    TranslateModule,
    RouterLink,
    YouTubePlayerModule
    // PeopleSayingComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
                    '../../../../../assets/css/sections/sectionSix.css',
                  '../../../../../assets/css/style.css',
                  '../../../../../assets/css/sections/contactSection.css',
  ],  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
 encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('50ms ease', style({ height: '*', opacity: 1 , display:'none'})),
      ]),
      transition(':leave', [
        animate('500ms ease', style({ height: 0, opacity: 0, display:'block' })),
      ]),
    ]),
  ],
})
export class HomeComponent  implements OnInit ,AfterViewInit{
constructor(
  private translate: TranslateService,
  private modalService: ModalService,
  private elementRef: ElementRef,
  @Inject(PLATFORM_ID) private platformId: Object,
  public router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd && event.urlAfterRedirects === '/home') {
      this.resetTyping();
    }
  });
}
  @ViewChild('slickModalBlogs', { static: false }) slickModalBlogs!: SlickCarouselComponent;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('sliderBlogs', { static: true }) sliderBlogs!: ElementRef;
  @ViewChild('slideTitle', { static: true }) slideTitle!: ElementRef;
  @ViewChild('slideText', { static: true }) slideText!: ElementRef;
  @ViewChild('slideActive', { static: true }) slideActive!: ElementRef;
  @ViewChild('imgActive', { static: false }) imgActive!: ElementRef;

  fullText: string = `Driving <span class="color-linearGradient">AI-Powered Digital </span><span class="color-linearGradient"> Transformation</span> in Saudi Arabia`;
  typedText: string = '';
  currentIndex: number = 0;
  currentSlideIndex = 0;
  mainVideo: any;
  plyrList : any[]= [
    {
        src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4',
        type: 'video/mp4',
      title: 'AI Digital Twin: Live Insight. Smarter Control.',
      subTitle: 'Watch how CODE turns buildings into live, intelligent systems — with real-time insight and automation in every layer.',
      img:'assets/images/Frame-398-min.png'
    },

  ];

  ngOnInit(): void {
    this.activateFirstBox();
    this.mainVideo = this.plyrList[0];
    this.plyrList = this.plyrList.slice(1);

    // --- التعديل هنا ---
    if (isPlatformBrowser(this.platformId)) {
      // التحقق مما إذا كان السكربت موجوداً مسبقاً لتجنب التكرار
      if (!document.getElementById('youtube-iframe-api')) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api'; // إضافة ID للسكربت
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }
    // -------------------

    if (isFirstLoad) {
      isFirstLoad = false;
      setTimeout(() => {
        this.startTyping();
      }, 4000); 
    } else {
      this.startTyping();
    }
}
  resetTyping() {
    this.typedText = '';
    this.currentIndex = 0;
    this.startTyping();
  }

  startTyping() {
    if (isPlatformBrowser(this.platformId)) {
      const typingSpeed = 50;

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = this.fullText;
      const nodes = Array.from(tempDiv.childNodes);

      let output = '';

      const typeNode = (node: ChildNode, done: () => void) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          let charIndex = 0;

          const typeChar = () => {
            if (charIndex < text.length) {
              output += text[charIndex];
              this.typedText = output;
              charIndex++;
              setTimeout(typeChar, typingSpeed);
            } else {
              done();
            }
          };

          typeChar();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          const tag = element.tagName.toLowerCase();
          const openTag = `<${tag}${this.getAttributesAsString(element)}>`;
          const closeTag = `</${tag}>`;

          const innerText = element.textContent || '';
          let charIndex = 0;

          const typeChar = () => {
            if (charIndex < innerText.length) {
              const partial = innerText.slice(0, charIndex + 1);
              this.typedText = output + openTag + partial + closeTag;
              charIndex++;
              setTimeout(typeChar, typingSpeed);
            } else {
              output += openTag + innerText + closeTag;
              done();
            }
          };

          typeChar();
        }
      };

      const typeAllNodes = (i: number) => {
        if (i < nodes.length) {
          typeNode(nodes[i], () => {
            typeAllNodes(i + 1);
          });
        }
      };

      typeAllNodes(0);
    }
  }
  getAttributesAsString(el: HTMLElement): string {
    return Array.from(el.attributes).map(attr => ` ${attr.name}="${attr.value}"`).join('');
  }
  changeVideo(video: any) {
    const updatedList = this.plyrList.filter(v => v.src !== video.src);
    if (this.mainVideo) {
      updatedList.push(this.mainVideo);
    }
    this.mainVideo = video;
    this.plyrList = updatedList;

    // Force reload and play
    setTimeout(() => {
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play().catch(() => {}); 
      } 
    });
  }

  ngAfterViewInit() {
    this.updateSlideContent(0);
  }

  // Start Section Three style
boxes = [
  { 
    id: 1,
    showPart2: false, 
    isAnimating: false,
    isActive: false,
    titleKey: "AISOLUTIONS.boxes.digitalTwin.title",
    subTitleKey: "AISOLUTIONS.boxes.digitalTwin.subTitle",
    contentKey: "AISOLUTIONS.boxes.digitalTwin.content",
    pathBtn: "AISolutions/AIDigitalTwin"
  },
  { 
    id: 2,
    showPart2: false, 
    isAnimating: false, 
    isActive: false,
    titleKey: "AISOLUTIONS.boxes.computerVision.title",
    subTitleKey: "AISOLUTIONS.boxes.computerVision.subTitle",
    contentKey: "AISOLUTIONS.boxes.computerVision.content",
    pathBtn: "AISolutions/AiComputerVision"
  }
];
  activateFirstBox(): void {
    const firstBox = this.boxes[0];
    firstBox.isActive = true;
    firstBox.showPart2 = true;
    firstBox.isAnimating = true;

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      firstBox.isAnimating = false;
    }, 600);
  }

  onBoxClick(clickedBox: any): void {
    this.boxes.forEach(box => {
      box.showPart2 = false;
      box.isAnimating = false;
      box.isActive = false;
    });

    clickedBox.showPart2 = true;
    clickedBox.isActive = true;
    clickedBox.isAnimating = true;

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 300);

    setTimeout(() => {
      clickedBox.isAnimating = false;
    }, 600);
  }
  // End Section Three style
  // Section Seven style
  activeIndex = 1; 
faqs = [
  {
    questionKey: 'FAQS.q1.question',
    answerKey: 'FAQS.q1.answer',
  },
  {
    questionKey: 'FAQS.q2.question',
    answerKey: 'FAQS.q2.answer',
  },
  {
    questionKey: 'FAQS.q3.question',
    answerKey: 'FAQS.q3.answer',
  },
  {
    questionKey: 'FAQS.q4.question',
    answerKey: 'FAQS.q4.answer',
  },
  {
    questionKey: 'FAQS.q5.question',
    answerKey: 'FAQS.q5.answer',
  },
  {
    questionKey: 'FAQS.q6.question',
    answerKey: 'FAQS.q6.answer',
  },
  {
    questionKey: 'FAQS.q7.question',
    answerKey: 'FAQS.q7.answer',
  },
  {
    questionKey: 'FAQS.q8.question',
    answerKey: 'FAQS.q8.answer',
  }
];

  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
  // End Section Seven style

// Code Sliders
  // slider Blogs

  // First slider logos
  logos = [
    "assets/images/Partners-logos/Austria.png",
    "assets/images/Partners-logos/Germany (2).png",
    "assets/images/Partners-logos/Germany.png",
    "assets/images/Partners-logos/India (2).png",
    "assets/images/Partners-logos/India (3).png",
    "assets/images/Partners-logos/India (4).png",
    "assets/images/Partners-logos/India (5).png",
    "assets/images/Partners-logos/India.jpeg",
    "assets/images/Partners-logos/India.png",
    "assets/images/Partners-logos/Switzerland (2).png",
    "assets/images/Partners-logos/Switzerland.png",
    "assets/images/Partners-logos/Turkey.png"
  ];
  slideConfig = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    rtl: false, // This makes it move from left to right
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.6
        }
      }
    ]
  };

  // Second slider logos
  logos2 = [
    "assets/images/Partners-logos/United Arab Emirates (UAE).png",
    "assets/images/Partners-logos/United Arab Emirates..png",
    "assets/images/Partners-logos/United Kingdom..png",
    "assets/images/Partners-logos/United State.png",
    "assets/images/Partners-logos/United States (2).png",
    "assets/images/Partners-logos/United States (3).png",
    "assets/images/Partners-logos/United States(US).png",
    "assets/images/Partners-logos/United States.png",
    "assets/images/Partners-logos/United States1.png",
    "assets/images/Partners-logos/United States2.png",
    "assets/images/Partners-logos/United States-US.png"
  ];
  slideConfiglogos2 = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  };

  // Slider Blogs
slidesBlogs = [
  {
    titleKey: "BLOGS.slide1.title",
    fullTextKey: "BLOGS.slide1.fullText",
    shortTextKey: "BLOGS.slide1.shortText",
    img: '../../assets/images/sectionFour-slide1.png'
  },
  {
    titleKey: "BLOGS.slide2.title",
    fullTextKey: "BLOGS.slide2.fullText",
    shortTextKey: "BLOGS.slide2.shortText",
    img: '../../assets/images/sectionFour-slide2.png'
  },
  {
    titleKey: "BLOGS.slide3.title",
    fullTextKey: "BLOGS.slide3.fullText",
    shortTextKey: "BLOGS.slide3.shortText",
    img: '../../assets/images/sectionFour-slide3.png'
  },
  {
    titleKey: "BLOGS.slide4.title",
    fullTextKey: "BLOGS.slide4.fullText",
    shortTextKey: "BLOGS.slide4.shortText",
    img: '../../assets/images/sectionFour-slide4.png'
  }
];

  slideBlog = {
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
    // عند تغيير الشريحة
 onBeforeChange(event: any) {
  const next = event.nextSlide;
  this.currentSlideIndex = next;
  const slide = this.slidesBlogs[next];

  this.fadeOut([
    this.slideTitle.nativeElement,
    this.slideText.nativeElement,
    this.imgActive.nativeElement
  ], 300, () => {
    // ترجمة النصوص قبل عرضها
    this.translate.get(slide.titleKey).subscribe(title => {
      this.slideTitle.nativeElement.textContent = title;
    });
    this.translate.get(slide.shortTextKey).subscribe(shortText => {
      this.slideText.nativeElement.innerHTML = `
        ${shortText} 
        <b class="color-linearGradient readMoreBtn" style="cursor:pointer;">${this.translate.instant('BLOGS.readMore')}</b>
      `;
    });
    this.imgActive.nativeElement.setAttribute('src', slide.img);

    this.fadeIn([
      this.slideTitle.nativeElement,
      this.slideText.nativeElement,
      this.imgActive.nativeElement
    ], 500);
  });
}

  updateSlideContent(index: number) {
  const slide = this.slidesBlogs[index];
  this.translate.get(slide.titleKey).subscribe(title => {
    this.slideTitle.nativeElement.textContent = title;
  });
  this.translate.get(slide.shortTextKey).subscribe(shortText => {
    this.slideText.nativeElement.innerHTML = `
      ${shortText} 
      <b class="color-linearGradient readMoreBtn" style="cursor:pointer;">${this.translate.instant('BLOGS.readMore')}</b>
    `;
  });
}
onReadMoreClick(event: Event) {
  const target = event.target as HTMLElement;
  if (target.classList.contains('readMoreBtn')) {
    const slide = this.slidesBlogs[this.currentSlideIndex];
    this.translate.get(slide.fullTextKey).subscribe(fullText => {
      this.slideText.nativeElement.innerHTML = fullText;
    });
  }
}
    nextSlideBlog() {
      this.slickModalBlogs.slickNext();
    }
    prevSlideBlog() {
      this.slickModalBlogs.slickPrev();
    }
  // End Slider Blog


  openTalkCodeModal() {
      this.modalService.open('modalTalkCode');
    }
        fadeOut(elements: HTMLElement[], duration: number, callback: () => void) {
      elements.forEach(el => {
        el.style.transition = `opacity ${duration}ms`;
        el.style.opacity = '0';
      });
      setTimeout(callback, duration);
    }
    
    fadeIn(elements: HTMLElement[], duration: number) {
      elements.forEach(el => {
        el.style.transition = `opacity ${duration}ms`;
        el.style.opacity = '1';
      });
    }



// @ViewChild('videoAISmartSecurity') videoAISmartSecurity!: ElementRef<HTMLVideoElement>;
// @ViewChild('videoAISmartFacility') videoAISmartFacility!: ElementRef<HTMLVideoElement>;

// activeTab: string = 'security';
// isVideoPlaying: boolean = false;
// isVideoAiSmartfacilityPlaying: boolean = false;

// AISmartSecurityVideo = { src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4' }; 
// AISmartfacilityVideo = { src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4' }; 

// setActiveTab(tab: string) {
//     this.activeTab = tab;
//     this.stopAllVideos();
// }

// stopAllVideos() {
//     if (this.videoAISmartSecurity?.nativeElement) {
//         this.videoAISmartSecurity.nativeElement.pause();
//         this.isVideoPlaying = false;
//     }
//     if (this.videoAISmartFacility?.nativeElement) {
//         this.videoAISmartFacility.nativeElement.pause();
//         this.isVideoAiSmartfacilityPlaying = false;
//     }
// }

// playVideo() {
//     this.isVideoPlaying = true; 
//     this.videoAISmartSecurity.nativeElement.play();
// }
// onVideoPause() {
//     this.isVideoPlaying = false; 
// }

// playVideoAISmartfacility() {
//     this.isVideoAiSmartfacilityPlaying = true; 
//     this.videoAISmartFacility.nativeElement.play();
// }
// onVideoAISmartfacilityPause() {
//     this.isVideoAiSmartfacilityPlaying = false; 
// }


@ViewChild('youtubeSecurity') youtubeSecurity!: YouTubePlayer;
  @ViewChild('youtubeFacility') youtubeFacility!: YouTubePlayer;

  activeTab: string = 'security';
  isVideoPlaying: boolean = false;
  isVideoAiSmartfacilityPlaying: boolean = false;

  // استخرج الـ ID الخاص بفيديو اليوتيوب (مثال: dQw4w9WgXcQ)
  AISmartSecurityVideo = { videoId: 'DYw5zcyK4-Q' }; 
  AISmartfacilityVideo = { videoId: 'kOHvcztXQfI' }; 

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.stopAllVideos();
  }

  stopAllVideos() {
    if (this.youtubeSecurity) {
      this.youtubeSecurity.pauseVideo();
      this.isVideoPlaying = false;
    }
    if (this.youtubeFacility) {
      this.youtubeFacility.pauseVideo();
      this.isVideoAiSmartfacilityPlaying = false;
    }
  }

  playVideo() {
    this.isVideoPlaying = true; 
    this.youtubeSecurity.playVideo();
  }

  playVideoAISmartfacility() {
    this.isVideoAiSmartfacilityPlaying = true; 
    this.youtubeFacility.playVideo();
  }

  // دالة واحدة للتعامل مع تغير حالة فيديوهات اليوتيوب (إيقاف أو انتهاء)
  onYoutubeStateChange(event: any, type: string) {
    // event.data يعيد رقم يعبر عن حالة الفيديو
    // 0 = انتهى الفيديو (Ended)
    // 2 = الفيديو متوقف (Paused)
    if (event.data === 0 || event.data === 2) {
      if (type === 'security') {
        this.isVideoPlaying = false;
      } else if (type === 'facility') {
        this.isVideoAiSmartfacilityPlaying = false;
      }
    }
  }
}