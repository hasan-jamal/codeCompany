import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { AboutUsComponent } from "../components/about-us/about-us.component";
declare var anychart: any;
import { Router } from '@angular/router';
import { SlickCarouselModule,SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-our-partners',
  imports: [CommonModule,    SlickCarouselModule,],
  templateUrl: './our-partners.component.html',
  styleUrls:['./our-partners.component.css',
                  '../../../../assets/css/general.css',
                  '../../../../assets/css/pages/ourDatacenterPartners.css',
                  '../../../../assets/css/sections/contactSection.css',
                  '../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OurPartnersComponent implements AfterViewInit{
  activeIndex: number = 0;
  constructor(public router:Router){}
  boxes = [
    {
      title: 'Datacenter Partners',
      heading: 'Success Partners',
      text: `CODE partners with leading organizations to solve complex IT challenges & enhance their systems. <br><br>Explore our partners to see how we drive innovation and growth.`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('assets/images/imageAI-1.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Security Partners',
      heading: 'The AI power at Code innovate everything.',
      text: `We love helping you bring ideas to life. We focus on creating value by providing modern IT solutions`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('assets/images/imageAI-2.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Software Partners',
      heading: 'Telecom Partners.',
      text: `CODE partners with leading organizations to solve complex IT challenges & enhance their systems. <br>Explore our partners to see how we drive innovation and growth.`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('assets/images/WhoisCode2.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Telecom Partners',
      heading: 'The AI power at Code innovate everything.',
      text: `We love helping you bring ideas to life. We focus on creating value by providing modern IT solutions`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('assets/images/servicesS3-img5.png') lightgray top / cover no-repeat`
    }
  ];

  setActiveBox(index: number): void {
    this.activeIndex = index;
  }
 locations=[
  { "lat": 24.090246, "long": 79.282086 , "flag": "assets/images/flags/India.png", "Name": "India" },
  { "lat": 48.8566, "long": 2.3522, "flag": "assets/images/flags/uk.png", "Name": "UK" },
  { "lat": 33.646409, "long": 103.672295, "flag": "assets/images/flags/China.png", "Name": "China" },
  { "lat": 42.854562, "long": 19.177497, "flag": "assets/images/flags/Montegro.png", "Name": "Montegro" },
  { "lat": 50.890704, "long": 10.007136, "flag": "assets/images/flags/Germany.png", "Name": "Germany" },
  { "lat": 45.605512, "long": 25.280551, "flag": "assets/images/flags/Romania.png", "Name": "Romania" },
  { "lat": 45.027440,"long": 10.510977, "flag": "assets/images/flags/Italy.jpg", "Name": "Italy" },
  { "lat": -23.219750, "long": 128.711468, "flag": "assets/images/flags/Australia.jpg", "Name": "Australia" },
 ]
 ngAfterViewInit(): void {
  anychart.onDocumentReady(() => {
    const data = this.locations;
    if (!data || data.length === 0) {
      console.error('❌ فشل تحميل الملف أو لا يوجد بيانات');
      return;
    }
    console.log('✅ تم تحميل الملف بنجاح:', data);

    const map = anychart.map();
    map.geoData('anychart.maps.world');
    map.title('Country Flags on Hover');

    // Map latitude/longitude to x/y
    // AnyChart expects data items with 'lat' and 'long' keys by default for markers.
    const dataSet = anychart.data.set(data);

    const series = map.marker(dataSet);

    map.unboundRegions().fill('#b7b7b7').stroke('#ffffff');

    series.type('circle').fill('red').stroke('white').size(6).labels(false);

    series.tooltip()
      .useHtml(true)
      .title(false)
      .format(function (this: any) {
        return `
          <img src="${this.getData('flag')}" width="100" height="60"><br>
          <strong>${this.getData('Name')}</strong>
        `;
      });

    map.container('mapInLocation');
    map.draw();
  });
}
  // First slider logos
  logos = [
    "assets/images/aboutUsLogos/imgLogo1.png",
    "assets/images/aboutUsLogos/imgLogo2.png",
    "assets/images/aboutUsLogos/imgLogo3.png",
    "assets/images/aboutUsLogos/imgLogo4.png",
    "assets/images/aboutUsLogos/imgLogo5.png",
    "assets/images/aboutUsLogos/imgLogo6.png",
    "assets/images/aboutUsLogos/imgLogo7.png",
    "assets/images/aboutUsLogos/imgLogo8.png",
  ];
  slideConfig = {
    slidesToShow: 6,
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
    "assets/images/aboutUsLogos/imgLogo8.png",
    "assets/images/aboutUsLogos/imgLogo7.png",
    "assets/images/aboutUsLogos/imgLogo6.png",
    "assets/images/aboutUsLogos/imgLogo5.png",
    "assets/images/aboutUsLogos/imgLogo4.png",
    "assets/images/aboutUsLogos/imgLogo3.png",
    "assets/images/aboutUsLogos/imgLogo2.png",
    "assets/images/aboutUsLogos/imgLogo1.png",
  ];
  slideConfiglogos2 = {
    slidesToShow: 6,
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

}
