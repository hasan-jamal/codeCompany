import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  imports: [CommonModule],
  templateUrl: './our-partners.component.html',
  styleUrls:['./our-partners.component.css',
                  '../../../../assets/css/general.css',
                  '../../../../assets/css/pages/ourDatacenterPartners.css',
                  '../../../../assets/css/sections/contactSection.css',
                  '../../../../assets/css/sections/ourServiceFlow.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OurPartnersComponent {
  activeIndex: number = 0;

  boxes = [
    {
      title: 'Datacenter Partners',
      heading: 'Success Partners',
      text: `CODE partners with leading organizations to solve complex IT challenges & enhance their systems. <br><br>Explore our partners to see how we drive innovation and growth.`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('../../../../assets/images/imageAI-1.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Security Partners',
      heading: 'The AI power at Code innovate everything.',
      text: `We love helping you bring ideas to life. We focus on creating value by providing modern IT solutions`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('../../../../assets/images/imageAI-2.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Software Partners',
      heading: 'Telecom Partners.',
      text: `CODE partners with leading organizations to solve complex IT challenges & enhance their systems. <br>Explore our partners to see how we drive innovation and growth.`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('../../../../assets/images/WhoisCode2.png') lightgray top / cover no-repeat`
    },
    {
      title: 'Telecom Partners',
      heading: 'The AI power at Code innovate everything.',
      text: `We love helping you bring ideas to life. We focus on creating value by providing modern IT solutions`,
      background: `linear-gradient(0deg, rgba(43, 45, 67, 0.70) 0%, rgba(43, 45, 67, 0.70) 100%), url('../../../../assets/images/servicesS3-img5.png') lightgray top / cover no-repeat`
    }
  ];

  setActiveBox(index: number): void {
    this.activeIndex = index;
  }
}
