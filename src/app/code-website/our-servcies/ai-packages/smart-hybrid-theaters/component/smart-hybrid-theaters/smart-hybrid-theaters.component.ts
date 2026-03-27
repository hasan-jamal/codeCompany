import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-smart-hybrid-theaters',
  templateUrl: './smart-hybrid-theaters.component.html',
    styleUrls: [ '../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './smart-hybrid-theaters.component.css'],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class SmartHybridTheatersComponent implements OnInit{
constructor(private modalService: ModalService,private cdr: ChangeDetectorRef){}
  activeCardId: number = 2;
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  ngOnInit(): void {
     this.activateFirstBox();
  }

boxes = [
    { 
      id: 1,
      showPart2: true,
      isAnimating: false,
      isActive: true,
      titleKey: "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.TITLE",
      subTitleKey: "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.SUBTITLE",
      contentKey: "",
      listItems: [
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.0",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.1",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.2",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.3",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.4",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.5",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.6",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.7",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.8",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.9",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.10",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.11",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.12",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.1.ITEMS.13"
      ],
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.TITLE",
      subTitleKey: "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.SUBTITLE", 
      contentKey: "",
      listItems: [
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.0",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.1",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.2",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.3",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.4",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.5",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.6",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.7",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.8",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.9",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.10",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.11",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.12",
        "SMART_HYBRID_THEATERS.TS_DATA.BOXES.2.ITEMS.13"
      ],
      footerContentKey: "",
      pathBtn: ""
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








   slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false, 
    "dots": false, 
    "autoplay": true,
    "autoplaySpeed": 3000,
    "infinite": true
  };

 slidesData = [
    {
      features: [
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.1.F1',
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.1.F2',
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.1.F3'
      ],
      image: 'assets/images/AIPackages-services/AI-Driven-Smart-City-Management/4.jpg',
      altText: 'Operational Environment UI'
    },
    {
      features: [
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.2.F1',
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.2.F2',
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.2.F3',
        'SMART_HYBRID_THEATERS.TS_DATA.SLIDES.2.F4'
      ],
      image: 'assets/images/AIPackages-services/2-1.jpg',
      altText: 'Analytics Dashboard UI'
    }
  ];

  @ViewChild('slickModal', { static: false }) slickModal!: SlickCarouselComponent;

  activeIndex: number = 0;

  sliderConfig = {
    slidesToShow: 1,       
    slidesToScroll: 1,     
    dots: false,      
    arrows: false,      
    infinite: true,      
    autoplay: true,     
    autoplaySpeed: 1000,  
    rtl: false,       
  };

featuresArray = [
    {
      id: 1,
      title: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.1.TITLE",
      content: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.1.CONTENT"
    },
    {
      id: 2,
      title: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.2.TITLE",
      content: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.2.CONTENT"
    },
    {
      id: 3,
      title: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.3.TITLE",
      content: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.3.CONTENT"
    },
    {
      id: 4,
      title: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.4.TITLE",
      content: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.4.CONTENT"
    },
    {
      id: 5,
      title: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.5.TITLE",
      content: "SMART_HYBRID_THEATERS.TS_DATA.FEATURES.5.CONTENT"
    }
  ];
  setActiveIndex(index: number): void {
    this.activeIndex = index;
    
    if (this.slickModal && this.slickModal.slickGoTo) {
      this.slickModal.slickGoTo(index);
    }
        this.cdr.detectChanges();
  }

  afterChange(event: any): void {
    if (event && event.currentSlide !== undefined) {
      this.activeIndex = event.currentSlide;
      this.cdr.detectChanges();
    }
  }
}
