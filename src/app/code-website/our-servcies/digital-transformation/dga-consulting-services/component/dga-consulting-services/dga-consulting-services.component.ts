import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-dga-consulting-services',
  templateUrl: './dga-consulting-services.component.html',
  styleUrls: ['../../../../../../../assets/css/pages/serviceDetails.css',
                    '../../../../../../../assets/css/sections/contactSection.css',
                    '../../../../../../../assets/css/pages/ourServcies.css',
                    './dga-consulting-services.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:false
})
export class DgaConsultingServicesComponent  implements OnInit{
constructor(private modalService: ModalService,private cdr: ChangeDetectorRef){}
  activeCardId: number = 2;

  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }

  ngOnInit(): void {
  }

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
      title: "DGA_CONSULTING.TS_DATA.FEATURES.1.TITLE",
      content: "DGA_CONSULTING.TS_DATA.FEATURES.1.CONTENT",
      listItems: [
        "DGA_CONSULTING.TS_DATA.FEATURES.1.ITEMS.0",
        "DGA_CONSULTING.TS_DATA.FEATURES.1.ITEMS.1",
        "DGA_CONSULTING.TS_DATA.FEATURES.1.ITEMS.2"
      ],
    },
    {
      id: 2,
      title: "DGA_CONSULTING.TS_DATA.FEATURES.2.TITLE",
      content: "DGA_CONSULTING.TS_DATA.FEATURES.2.CONTENT",
      listItems: [
        "DGA_CONSULTING.TS_DATA.FEATURES.2.ITEMS.0",
        "DGA_CONSULTING.TS_DATA.FEATURES.2.ITEMS.1",
        "DGA_CONSULTING.TS_DATA.FEATURES.2.ITEMS.2"
      ],
    },
    {
      id: 3,
      title: "DGA_CONSULTING.TS_DATA.FEATURES.3.TITLE",
      content: "DGA_CONSULTING.TS_DATA.FEATURES.3.CONTENT",
      listItems: [
        "DGA_CONSULTING.TS_DATA.FEATURES.3.ITEMS.0",
        "DGA_CONSULTING.TS_DATA.FEATURES.3.ITEMS.1",
        "DGA_CONSULTING.TS_DATA.FEATURES.3.ITEMS.2"
      ],
    },
    {
      id: 4,
      title: "DGA_CONSULTING.TS_DATA.FEATURES.4.TITLE",
      content: "DGA_CONSULTING.TS_DATA.FEATURES.4.CONTENT",
      listItems: [
        "DGA_CONSULTING.TS_DATA.FEATURES.4.ITEMS.0",
        "DGA_CONSULTING.TS_DATA.FEATURES.4.ITEMS.1",
        "DGA_CONSULTING.TS_DATA.FEATURES.4.ITEMS.2"
      ],
    },
    {
      id: 5,
      title: "DGA_CONSULTING.TS_DATA.FEATURES.5.TITLE",
      content: "DGA_CONSULTING.TS_DATA.FEATURES.5.CONTENT",
      listItems: [
        "DGA_CONSULTING.TS_DATA.FEATURES.5.ITEMS.0",
        "DGA_CONSULTING.TS_DATA.FEATURES.5.ITEMS.1",
        "DGA_CONSULTING.TS_DATA.FEATURES.5.ITEMS.2"
      ],
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
