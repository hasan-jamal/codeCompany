import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ModalService } from '../../../services/ModalService';
import { CurrentUserService } from '../../../services/currentUser.service';
import { User } from '../../../models/User/User.modal';
import { Observable } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInterface } from '../../../models/Service/Service.modal';
import { ServiceService } from '../../../services/service.service';
import { ServiceResponse } from '../../../models/Service/Service.Response';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

export interface ServiceCard {
  name: string;
  description: string;
  img: string;
  logo?: string;
  route: string;
}

export interface SubCategory {
  name: string;
  cards: ServiceCard[];
}

export interface MainService {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  hasSubCategories: boolean;
  cards?: ServiceCard[];
  subCategories?: SubCategory[];
  exploreLink: string;
  exploreText: string;
}

@Component({
  selector: 'app-navbar-des',
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule,
    TranslateModule,
    SlickCarouselModule
  ],
  templateUrl: './navbar-des.component.html',
  styleUrls: [
    './navbar-des.component.css',
    '../../../../assets/css/header.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarDesComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  isServicesMenuOpen = false;
  hideMenuTimeout: any;

  showServicesMenu() {
    clearTimeout(this.hideMenuTimeout);
    this.isServicesMenuOpen = true;
    this.isCoverVisible =true;
  }

  hideServicesMenu() {
    this.hideMenuTimeout = setTimeout(() => {
      this.isServicesMenuOpen = false;
      this.isCoverVisible =false;
    }, 100);
  }
  isCoverVisible = false;
  isAdmin: boolean | null = null;
  userName: string | null = null;
  currentUser$: Observable<User | null>;
  lang : string = 'en';
  services: ServiceInterface[] = [];
    response: ServiceResponse | undefined;
    selectedSort: string = '';
    searchText: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
showCarousel: boolean = true;
    
  constructor(
    private modalService: ModalService, 
    @Inject(PLATFORM_ID) private platformId: Object,
    private currentUserService: CurrentUserService,
    private serviceService: ServiceService,
    private translate: TranslateService) {
      if (isPlatformBrowser(this.platformId)) {
      this.currentUser$ = this.currentUserService.currentUser$;
      const lang = localStorage.getItem('lang') || 'en';
      this.translate.use(lang);
      }
  }
    ngOnInit(): void {
        this.currentUserService.currentUser$.subscribe(user => {
          this.userName = user?.username || null;
        });
        // this.loadServices();

        this.selectMainService(this.mainServices[0]);
    }

  showCover() {
    this.isCoverVisible = true;
  }

  hideCover() {
    this.isCoverVisible = false;
  }

  openJoinUsModal() {
    this.modalService.open('modalJoinUs');
  }
  switchLanguage(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.lang = lang;

     if (lang === 'ar') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    }
  }

//  loadServices(): void {
//   this.serviceService.getServices(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
//     .subscribe({
//       next: (data: ServiceResponse) => {
//         this.response = data;
//         const rowCount = data.service?.pagination?.rowCount ?? 0;
//         this.totalPages = Math.ceil(rowCount / this.pageSize);
//       },
//       error: (err) => {
//         console.error('Error loading services:', err);
//       },
//     });

//   }

slideConfigService = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    infinite: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2, 
        slidesToScroll: 1,
        dots: true 
      }
    },
  ]
  };

mainServices: MainService[] = [
    {
      id: 'ai-packages',
      title: 'ServicesMenu.AIPackages.Title',
      subtitle: 'ServicesMenu.AIPackages.Subtitle',
      icon: 'assets/images/HeaderIcons/AI-PackagesIcon.svg',
      hasSubCategories: false,
      exploreLink: '/ourServices/AI-Packages',
      exploreText: 'ServicesMenu.AIPackages.Explore',
      cards: [
        { name: 'ServicesMenu.AIPackages.Cards.Security.Name', description: 'ServicesMenu.AIPackages.Cards.Security.Desc', img: 'assets/images/servicesS3-img1.png', route: '/ourServices/AI-Packages/AiSmartSecurity' },
        { name: 'ServicesMenu.AIPackages.Cards.Facility.Name', description: 'ServicesMenu.AIPackages.Cards.Facility.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/AI-Packages/AiSmartFacility' },
        { name: 'ServicesMenu.AIPackages.Cards.City.Name', description: 'ServicesMenu.AIPackages.Cards.City.Desc', img: 'assets/images/imageAI-3.png', route: '/ourServices/AI-Packages/AiSmartCity' },
        { name: 'ServicesMenu.AIPackages.Cards.Theaters.Name', description: 'ServicesMenu.AIPackages.Cards.Theaters.Desc', img: 'assets/images/imageAI-1.png', route: '/ourServices/AI-Packages/SmartHybridTheaters' },
        { name: 'ServicesMenu.AIPackages.Cards.Dispatching.Name', description: 'ServicesMenu.AIPackages.Cards.Dispatching.Desc', img: 'assets/images/Frame-398-min.png', route: '/ourServices/AI-Packages/AiDispatchingCenter' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'ServicesMenu.AISolutions.Title',
      subtitle: 'ServicesMenu.AISolutions.Subtitle',
      icon: 'assets/images/HeaderIcons/AI-SolutionsIcon.svg',
      hasSubCategories: false,
      exploreLink: '/ourServices/AISolutions',
      exploreText: 'ServicesMenu.AISolutions.Explore',
      cards: [
        { name: 'ServicesMenu.AISolutions.Cards.DigitalTwin.Name', description: 'ServicesMenu.AISolutions.Cards.DigitalTwin.Desc', img: 'assets/images/HeaderIcons/backSlider-service.png', route: '/ourServices/AISolutions/AIDigitalTwin' },
        { name: 'ServicesMenu.AISolutions.Cards.ComputerVision.Name', description: 'ServicesMenu.AISolutions.Cards.ComputerVision.Desc', img: 'assets/images/servicesS3-img5.png', route: '/ourServices/AISolutions/AiComputerVision' },
        { name: 'ServicesMenu.AISolutions.Cards.Voicebots.Name', description: 'ServicesMenu.AISolutions.Cards.Voicebots.Desc', img: 'assets/images/servicesS3-img6.png', route: '/ourServices/AISolutions/AiVoicebotChatbot' },
        { name: 'ServicesMenu.AISolutions.Cards.Wayfinding.Name', description: 'ServicesMenu.AISolutions.Cards.Wayfinding.Desc', img: 'assets/images/servicesS3-img1.png', route: '/ourServices/AISolutions/IndoorWayfinding' },
        { name: 'ServicesMenu.AISolutions.Cards.SmartCabins.Name', description: 'ServicesMenu.AISolutions.Cards.SmartCabins.Desc', img: 'assets/images/imageAI-1.png', route: '/ourServices/AISolutions/smartCabins' }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'ServicesMenu.DigitalTransformation.Title',
      subtitle: 'ServicesMenu.DigitalTransformation.Subtitle',
      icon: 'assets/images/HeaderIcons/Digital-TransformationIcon.svg',
      hasSubCategories: false,
      exploreLink: '/ourServices/Digital-Transformation',
      exploreText: 'ServicesMenu.DigitalTransformation.Explore',
      cards: [
        { name: 'ServicesMenu.DigitalTransformation.Cards.EA.Name', description: 'ServicesMenu.DigitalTransformation.Cards.EA.Desc', img: 'assets/images/servicesS3-img3.png', route: '/ourServices/Digital-Transformation/EaServices' },
        { name: 'ServicesMenu.DigitalTransformation.Cards.NDMO.Name', description: 'ServicesMenu.DigitalTransformation.Cards.NDMO.Desc', img: 'assets/images/HeaderIcons/backSlider-service.png', route: '/ourServices/Digital-Transformation/NdmoServices' },
        { name: 'ServicesMenu.DigitalTransformation.Cards.DGA.Name', description: 'ServicesMenu.DigitalTransformation.Cards.DGA.Desc', img: 'assets/images/servicesS3-img2.png', route: '/ourServices/Digital-Transformation/DgaConsultingServices' },
        { name: 'ServicesMenu.DigitalTransformation.Cards.InnovationHub.Name', description: 'ServicesMenu.DigitalTransformation.Cards.InnovationHub.Desc', img: 'assets/images/servicesS3-img8.png', route: '/ourServices/Digital-Transformation/InnovationHub' }
      ]
    },
    {
      id: 'ict-solutions',
      title: 'ServicesMenu.ICTSolutions.Title',
      subtitle: 'ServicesMenu.ICTSolutions.Subtitle',
      icon: 'assets/images/HeaderIcons/ICT-SolutionsIcon.svg',
      hasSubCategories: true,
      exploreLink: '/ourServices/ICT-Solutions',
      exploreText: 'ServicesMenu.ICTSolutions.Explore',
      subCategories: [
        {
          name: 'ServicesMenu.ICTSolutions.SubCategories.PassiveCivil',
          cards: [
            { name: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.CommandCenter.Name', description: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.CommandCenter.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/ICT-Solutions/PassiveAndCivilWork/commandCenter' },
            { name: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.MediaCenter.Name', description: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.MediaCenter.Desc', img: 'assets/images/sectionTwo-img1.png', route: '/ourServices/ICT-Solutions/PassiveAndCivilWork/mediaCenter' },
            { name: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.NocSoc.Name', description: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.NocSoc.Desc', img: 'assets/images/servicesS3-img1.png', route: '/ourServices/ICT-Solutions/PassiveAndCivilWork/NOC-SOC' },
            { name: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.MeetingRooms.Name', description: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.MeetingRooms.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/ICT-Solutions/PassiveAndCivilWork/SmartMeetingRooms' },
            { name: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.BusinessResearch.Name', description: 'ServicesMenu.ICTSolutions.Cards.PassiveCivil.BusinessResearch.Desc', img: 'assets/images/imageAI-1.png', route: '/ourServices/ICT-Solutions/PassiveAndCivilWork/BusinessResearch' }
          ]
        },
        {
          name: 'ServicesMenu.ICTSolutions.SubCategories.Healthcare',
          cards: [
            { name: 'ServicesMenu.ICTSolutions.Cards.Healthcare.HIS.Name', description: 'ServicesMenu.ICTSolutions.Cards.Healthcare.HIS.Desc', img: 'assets/images/servicesS3-img2.png', route: '/ourServices/ICT-Solutions/DigitalHealthcare/HIS' },
            { name: 'ServicesMenu.ICTSolutions.Cards.Healthcare.RCM.Name', description: 'ServicesMenu.ICTSolutions.Cards.Healthcare.RCM.Desc', img: 'assets/images/servicesS3-img8.png', route: '/ourServices/ICT-Solutions/DigitalHealthcare/RCM' },
            { name: 'ServicesMenu.ICTSolutions.Cards.Healthcare.DRG.Name', description: 'ServicesMenu.ICTSolutions.Cards.Healthcare.DRG.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/ICT-Solutions/DigitalHealthcare/DRG' },
            { name: 'ServicesMenu.ICTSolutions.Cards.Healthcare.TeleMedicine.Name', description: 'ServicesMenu.ICTSolutions.Cards.Healthcare.TeleMedicine.Desc', img: 'assets/images/sectionTwo-img1.png', route: '/ourServices/ICT-Solutions/DigitalHealthcare/TeleMedicine' }
          ]
        },
        {
          name: 'ServicesMenu.ICTSolutions.SubCategories.DataCloud',
          cards: [
            { name: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DataEngineering.Name', description: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DataEngineering.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/ICT-Solutions/DataAndCloudEngineering/dataEngineering' },
            { name: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DatabaseConsolidation.Name', description: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DatabaseConsolidation.Desc', img: 'assets/images/servicesS3-img6.png', route: '/ourServices/ICT-Solutions/DataAndCloudEngineering/databaseConsolidation' },
            { name: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DisasterRecovery.Name', description: 'ServicesMenu.ICTSolutions.Cards.DataCloud.DisasterRecovery.Desc', img: 'assets/images/HeaderIcons/imageAI-3.png', route: '/ourServices/ICT-Solutions/DataAndCloudEngineering/disasterRecoverySolutions' },
            { name: 'ServicesMenu.ICTSolutions.Cards.DataCloud.ITSM.Name', description: 'ServicesMenu.ICTSolutions.Cards.DataCloud.ITSM.Desc', img: 'assets/images/servicesS3-img1.png', route: '/ourServices/ICT-Solutions/DataAndCloudEngineering/ItServiceManagement' }
          ]
        },
        {
          name: 'ServicesMenu.ICTSolutions.SubCategories.Automation',
          cards: [
            { name: 'ServicesMenu.ICTSolutions.Cards.Automation.DigitalSignature.Name', description: 'ServicesMenu.ICTSolutions.Cards.Automation.DigitalSignature.Desc', img: 'assets/images/sectionFour-slide4.png', route: '/ourServices/ICT-Solutions/AutomationAndSecurity/digitalSignature' },
            { name: 'ServicesMenu.ICTSolutions.Cards.Automation.RPA.Name', description: 'ServicesMenu.ICTSolutions.Cards.Automation.RPA.Desc', img: 'assets/images/servicesS3-img2.png', route: '/ourServices/ICT-Solutions/AutomationAndSecurity/roboticProcess' }
          ]
        },
        {
          name: 'ServicesMenu.ICTSolutions.SubCategories.Software',
          cards: [
            { name: 'ServicesMenu.ICTSolutions.Cards.Software.WebApp.Name', description: 'ServicesMenu.ICTSolutions.Cards.Software.WebApp.Desc', img: 'assets/images/sectionTwo-img1.png', route: '/ourServices/ICT-Solutions/SoftwareAndDevelopment/webMobileAppDevelopment' },
            { name: 'ServicesMenu.ICTSolutions.Cards.Software.SharePoint.Name', description: 'ServicesMenu.ICTSolutions.Cards.Software.SharePoint.Desc', img: 'assets/images/imageAI-1.png', route: '/ourServices/ICT-Solutions/SoftwareAndDevelopment/sharePointSolutions' }
          ]
        }
      ]
    }
  ];

 activeMainService: MainService = this.mainServices[0];
  activeSubCategory: SubCategory | null = null;
  currentCards: ServiceCard[] = [];
  isDropdownOpen = false;

 selectMainService(service: MainService) {
  this.showCarousel = false;
  
  this.activeMainService = service;
  this.isDropdownOpen = false;

  if (service.hasSubCategories && service.subCategories) {
    this.activeSubCategory = service.subCategories[0];
    this.currentCards = service.subCategories[0].cards;
  } else {
    this.activeSubCategory = null;
    this.currentCards = service.cards || [];
  }

  setTimeout(() => {
    this.showCarousel = true;
  }, 0);
}

selectSubCategory(sub: SubCategory) {
  this.showCarousel = false; 

  this.activeSubCategory = sub;
  this.currentCards = sub.cards;
  this.isDropdownOpen = false;

  setTimeout(() => {
    this.showCarousel = true;
  }, 0);
}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  nextSlide() {
    this.slickModal.slickNext();
  }

  prevSlide() {
    this.slickModal.slickPrev();
  }
  closeMenu(){
    this.isServicesMenuOpen = false;
    this.isCoverVisible =false;
  }
  
}
