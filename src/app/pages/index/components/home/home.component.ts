import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Component, ViewEncapsulation,CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, AfterViewInit,Inject, PLATFORM_ID } from '@angular/core';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';
import { trigger, transition, style, animate } from '@angular/animations';
// import type Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import { PeopleSayingComponent } from '../../../../shared/people-saying/people-saying.component';
import { Router, NavigationEnd } from '@angular/router';
let isFirstLoad = true;

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule, 
    SlickCarouselModule,
    // PeopleSayingComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
                    '../../../../../assets/css/sections/sectionSix.css',
                  '../../../../../assets/css/style.css',
                   '../../../../../assets/css/general.css'
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
  // {
  //   src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881638/videoTwo_v86h3s.mp4',
  //   type: 'video/mp4',
  //   title: 'Real Estate Touch TV App',
  //   subTitle: 'Lorem ipsum dolor sit amet...',
  //         img:'assets/images/Frame-399-min.png'
  // },
  // {
  //   src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881692/videoFour_entojn.mp4',
  //   type: 'video/mp4',
  //   title: 'Construction WIP Monitoring',
  //   subTitle: 'Lorem ipsum dolor sit amet...',
  //         img:'assets/images/Frame-397-min.png'
  // },
  //   {
  //     src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881805/videoFive_h68de2.mp4',
  //       type: 'video/mp4',
  //     title: 'Sustainability via Digital Twin',
  //     subTitle: 'Lorem ipsum dolor sit amet...',
  //           img:'assets/images/Frame-396-min.png'
  //   },
    // {
    //   src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746882191/videoThree_g4vcgu.mp4',
    //   type: 'video/mp4',
    //   title: 'Monitoring Sustainable Environments',
    //   subTitle: 'Lorem ipsum dolor sit amet...',
    //   id: 'monitoring-sustainable',
    // img:'assets/images/Frame-398-min.png' 
    // }
  ];

  ngOnInit(): void {
     this.activateFirstBox();
     this.mainVideo = this.plyrList[0];
     this.plyrList = this.plyrList.slice(1)

     if (isFirstLoad) {
      isFirstLoad = false;
      setTimeout(() => {
        this.startTyping();
      }, 4000); // تأخير أول مرة فقط
    } else {
      this.startTyping(); // لا تأخير في التنقل بين الصفحات
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
        this.videoPlayer.nativeElement.play().catch(() => {}); // optional: handle autoplay error
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
        title:"AI Digital Twin Solution",
        subTitle:"Turn Physical Spaces Into Live, Intelligent Systems",
        content:"CODE’s AI Digital Twin creates a real-time, data-driven replica of your facility — giving you full operational visibility, predictive insight, and automated control across your environment." 
      },
    { id: 2, showPart2: false, isAnimating: false, isActive: false,
      title: "AI Computer Vision",
      subTitle: "Empowering Machines to Understand the Visual World",
      content: "Our AI Computer Vision solution enables real-time image and video analysis, allowing systems to detect, classify, and interpret visual data with high precision. From automated inspections to smart surveillance, we help you unlock actionable insights from every frame."
           },
    { id: 3, showPart2: false, isAnimating: false, isActive: false,
      title: "AI Innovation Hub",
      subTitle: "Accelerate Breakthroughs with Centralized AI Intelligence",
      content: "The AI Innovation Hub is your central platform for developing, testing, and deploying cutting-edge AI solutions. It unifies data, tools, and expertise to fast-track innovation — empowering your teams to turn ideas into real-world impact faster than ever."
           },
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
      question: 'What does CODE do?',
      answer:
        'CODE is a Saudi technology company delivering AI-powered solutions for smart infrastructure. We specialize in real-time systems like Digital Twin and Computer Vision to help organizations operate more intelligently, securely, and efficiently.',
    },
    {
      question: 'What is an AI Digital Twin?',
      answer:
        'An AI Digital Twin is a real-time, virtual replica of a physical environment. It provides live operational visibility, predictive analytics, and automated control — allowing organizations to monitor, simulate, and optimize performance instantly.',
    },
    {
      question: 'How does Computer Vision work in your solutions?',
      answer:
        'Our AI Computer Vision systems turn ordinary cameras into intelligent sensors. They detect safety risks, analyze behavior patterns, and automate surveillance — enhancing situational awareness across facilities.',
    },
    {
      question: 'Who are CODE’s solutions designed for?',
      answer:
        'We work with government entities, public institutions, and enterprise organizations that require scalable, secure, and high-performing systems — especially those aligned with Vision 2030 initiatives.',
    },
    {
      question: 'What makes CODE different from other AI providers?',
      answer:
        'CODE combines local insight with global technology standards. We offer end-to-end delivery — from strategy and deployment to long-term support — with a track record of performance in mission-critical environments.',
    },
    {
      question: 'How scalable are CODE’s solutions?',
      answer:
        'Our platforms are designed to scale — from a single building to nationwide infrastructure. Whether you’re managing a campus, hospital, or city-wide system, CODE delivers solutions that grow with your operations.',
    },
    {
      question: 'Can CODE integrate with our existing systems?',
      answer:
        'Yes. CODE’s solutions are designed for integration with legacy platforms and modern infrastructure alike — using open standards and modular architecture for smooth deployment.',
    },
    {
      question: 'Can CODE integrate with our existing systems?',
      answer:
        'Reach out to our team to discuss your goals. We’ll assess your environment, recommend the right AI solutions, and support you through every stage — from planning to rollout and beyond.',
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
    'assets/images/pageOneLogos/imgLogo1.svg',
    'assets/images/pageOneLogos/imgLogo2.png',
    'assets/images/pageOneLogos/imgLogo3.png',
    'assets/images/pageOneLogos/imgLogo4.png',
    'assets/images/pageOneLogos/imgLogo5.png',
    'assets/images/pageOneLogos/imgLogo6.svg',
    'assets/images/pageOneLogos/imgLogo7.png',
    'assets/images/pageOneLogos/imgLogo8.png',
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
    'assets/images/pageOneLogos/imgLogo9.png',
    'assets/images/pageOneLogos/imgLogo10.png',
    'assets/images/pageOneLogos/imgLogo11.png',
    'assets/images/pageOneLogos/imgLogo12.png',
    'assets/images/pageOneLogos/imgLogo13.png',
    'assets/images/pageOneLogos/imgLogo14.png',
    'assets/images/pageOneLogos/imgLogo4.png',
    'assets/images/pageOneLogos/imgLogo8.png',
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


  }