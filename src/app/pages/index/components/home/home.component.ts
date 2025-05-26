import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, ViewEncapsulation,CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';
import { trigger, transition, style, animate } from '@angular/animations';
// import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule, 
    SlickCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
                    '../../../../../assets/css/style.css'
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
constructor(private elementRef: ElementRef,@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('slickModalBlogs', { static: false }) slickModalBlogs!: SlickCarouselComponent;
  @ViewChild('slickPeopleSaying', { static: false }) slickPeopleSaying!: SlickCarouselComponent;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  @ViewChild('sliderBlogs', { static: true }) sliderBlogs!: ElementRef;
  @ViewChild('slideTitle', { static: true }) slideTitle!: ElementRef;
  @ViewChild('slideText', { static: true }) slideText!: ElementRef;
  @ViewChild('slideActive', { static: true }) slideActive!: ElementRef;
  @ViewChild('imgActive', { static: false }) imgActive!: ElementRef;


  currentSlideIndex = 0;
  mainVideo: any;
  plyrList : any[]= [
    {
        src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4',
        type: 'video/mp4',
      title: 'AI vs Human: The Results Will Shock You!',
      subTitle: 'Lorem ipsum dolor sit amet...',
      img:'assets/images/Frame-398-min.png'
    },
  {
    src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881638/videoTwo_v86h3s.mp4',
    type: 'video/mp4',
    title: 'Real Estate Touch TV App',
    subTitle: 'Lorem ipsum dolor sit amet...',
          img:'assets/images/Frame-399-min.png'
  },
  {
    src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881692/videoFour_entojn.mp4',
    type: 'video/mp4',
    title: 'Construction WIP Monitoring',
    subTitle: 'Lorem ipsum dolor sit amet...',
          img:'assets/images/Frame-397-min.png'
  },
    {
      src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881805/videoFive_h68de2.mp4',
        type: 'video/mp4',
      title: 'Sustainability via Digital Twin',
      subTitle: 'Lorem ipsum dolor sit amet...',
            img:'assets/images/Frame-396-min.png'
    },
    {
      src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746882191/videoThree_g4vcgu.mp4',
      type: 'video/mp4',
      title: 'Monitoring Sustainable Environments',
      subTitle: 'Lorem ipsum dolor sit amet...',
      id: 'monitoring-sustainable',
    img:'assets/images/Frame-398-min.png' 
    }
  ];

  ngOnInit(): void {
     this.activateFirstBox();
     this.mainVideo = this.plyrList[0];
     this.plyrList = this.plyrList.slice(1)

 
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
        this.videoPlayer.nativeElement.play().catch(() => {}); // optional: handle autoplay error
      } 
      
    });
  }
 
  ngAfterViewInit() {

    this.updateSlideContent(0);
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {

      const dots = document.querySelector('.sectionSix .slick-dots');
    
      if (!dots) return;
    
      let customNextArrow = dots.querySelector<HTMLButtonElement>('.custom-next-arrow');
  
      if (!customNextArrow) {
        customNextArrow = document.createElement('button');
        customNextArrow.classList.add('custom-next-arrow');
    
     dots.appendChild(customNextArrow);
    
      const arrowImg = document.createElement('img');
        arrowImg.src = '../../assets/images/arrow-peopleSaying.svg';
        customNextArrow.appendChild(arrowImg);
    
        customNextArrow.addEventListener('click', () => {
          this.slickPeopleSaying.slickNext();
        });
      }
    }
    });
  }

  // Start Section Three style
  boxes = [
    { id: 1, showPart2: false, isAnimating: false, isActive: false },
    { id: 2, showPart2: false, isAnimating: false, isActive: false },
    { id: 3, showPart2: false, isAnimating: false, isActive: false },
    { id: 4, showPart2: false, isAnimating: false, isActive: false },
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
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
    {
      question: 'How can I request a consultation or a quote?',
      answer:
        'You can contact us directly via the contact form on our website or send an email to email@code.com...',
    },
  ];
  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }
  // End Section Seven style

// Code Sliders
  // slider Blogs

  // First slider logos
  logos = [
    '../../../assets/images/logo1.svg',
    '../../../assets/images/logo2.svg',
    '../../../assets/images/logo3.svg',
    '../../../assets/images/logo4.svg',
    '../../../assets/images/logo5.svg',
    '../../../assets/images/logo6.svg',
    '../../../assets/images/logo7.svg',
    '../../../assets/images/Partners logos/Germany (2).png',
    '../../../assets/images/Partners logos/Germany.png',
    '../../../assets/images/Partners logos/India (2).png',
    '../../../assets/images/Partners logos/India (3).png',
    '../../../assets/images/Partners logos/India (4).png',
    '../../../assets/images/Partners logos/India (5).png'
  ];
  slideConfig = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
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
    '../../../assets/images/Partners logos/Austria.png',
    '../../../assets/images/Partners logos/United States (2).png',
    '../../../assets/images/Partners logos/United States1.png',
    '../../../assets/images/Partners logos/United States.png',
    '../../../assets/images/Partners logos/United States-US.png',
    '../../../assets/images/Partners logos/United States(US).png',
    '../../../assets/images/Partners logos/India.jpeg',
     '../../../assets/images/Partners logos/United States (2).png',
    '../../../assets/images/Partners logos/United States1.png',
  ];
  slideConfiglogos2 = {
    slidesToShow: 7.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
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
      title: "Infused is at the forefront of health innovation",
      fullText: "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics. Gain access to intelligent health solutions that illuminate the path to a healthier, more informed you.",
      shortText: "Enlightened Health AI takes your wellness journey to new heights with advanced predictive analytics...",
      img: '../../assets/images/sectionFour-slide1.png'
    },
    {
      title: "AI-Powered Wellness Solutions",
      fullText: "Discover AI-driven insights that help you take control of your health and well-being with personalized recommendations and actionable health data.",
      shortText: "Discover AI-driven insights that help you take control of your health and well-being...",
      img: '../../assets/images/sectionFour-slide2.png'
    },
    {
      title: "Transforming Healthcare with AI",
      fullText: "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions for both patients and medical professionals.",
      shortText: "Our cutting-edge AI technology is reshaping healthcare, providing smarter and faster solutions...",
      img: '../../assets/images/sectionFour-slide3.png'
    },
    {
      title: "Next-Gen AI for a Healthier Future",
      fullText: "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow with advanced data analysis and predictive insights.",
      shortText: "Explore the future of AI in healthcare and how it enhances daily life for a better tomorrow...",
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
    
      // Fade out ثم تحديث المحتوى ثم Fade in
      this.fadeOut([
        this.slideTitle.nativeElement,
        this.slideText.nativeElement,
        this.imgActive.nativeElement
      ], 300, () => {
        this.slideTitle.nativeElement.textContent = slide.title;
        this.slideText.nativeElement.innerHTML = `
          ${slide.shortText}
          <b class="color-linearGradient readMoreBtn" style="cursor:pointer;">Read more</b>
        `;
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
      this.slideTitle.nativeElement.textContent = slide.title;
      this.slideText.nativeElement.innerHTML = `
        ${slide.shortText} <b class="color-linearGradient readMoreBtn" style="cursor:pointer;">Read more</b>
      `;
    }
    onReadMoreClick(event: Event) {
      const target = event.target as HTMLElement;
      if (target.classList.contains('readMoreBtn')) {
        const fullText = this.slidesBlogs[this.currentSlideIndex].fullText;
        this.slideText.nativeElement.innerHTML = fullText;
      }
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
    nextSlideBlog() {
      this.slickModalBlogs.slickNext();
    }
  
    prevSlideBlog() {
      this.slickModalBlogs.slickPrev();
    }
  // End Slider Blog

  // Slider What people are saying?
    peopleSaying = [
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
    {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },

        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    },
        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#FEEFE6"
    },
        {
      text: "The AI-powered data analysis services from Code helped us gain deeper insights into our customers and make smarter decisions.",
      fullName: "Jenny Wilson",
      jobTitle: "CEO of Growtime",
      backgroundColor:"#D9D9D9"
    }
  ];
    sliderpeopleSaying = {
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1229,
        settings: {
          slidesToShow: 3.5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2
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
  }