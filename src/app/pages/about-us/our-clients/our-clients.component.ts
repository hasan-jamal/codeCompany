import { Component, ViewEncapsulation } from '@angular/core';
import { PeopleSayingComponent } from '../../../shared/people-saying/people-saying.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-clients',
  imports: [
    // PeopleSayingComponent,
    CommonModule],
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css',
                  '../../../../assets/css/general.css',
                  '../../../../assets/css/sections/contactSection.css',
                '../../../../assets/css/sections/sectionSix.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OurClientsComponent {
  activeTab: string = 'government';

  tabs = [
    { key: 'government', label: 'Government', bgColor: '#FCC' },
    { key: 'pif', label: 'PIF', bgColor: '#FDC' },
    { key: 'healthcare', label: 'Healthcare', bgColor: '#CCE6FF' },
    { key: 'telecom', label: 'Telecom', bgColor: '#E1CCFF' }
  ];

  tabContent: { [key: string]: { image: string; label: string }[] } = {
    government: [
      { image: 'assets/images/Government/Picture2.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government1.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government2.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government3.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government4.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government5.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government6.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture3.jpg', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government7.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/وزارة_الشؤون.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/مدن-الهيئة-السعودية-للمدن-الصناعية-ومناطق-التقنية-.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/صندوق الشهداء.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture4.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/شعار_الهيئة_السعودية_للملكية_الفكرية.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Logo_Ministry_of_Commerce.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/صندوق_التنمية_االوطني.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture5.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture6.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture7.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture8.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture10.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture11.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture12.jpg', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture13.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Picture14.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/مستشفى_الملك.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Government8.png', label: 'Banking & Finance' },
      { image: 'assets/images/Government/!Imam_Abdulrahman_Bin_Faisal_University_Logo.svg', label: 'Banking & Finance' },
      { image: 'assets/images/Government/Saudi_Space_Agency_Logo.svg', label: 'Banking & Finance' },
      { image: 'assets/images/Government/أمانة-الرياض.png', label: 'Banking & Finance' },
    ],
    pif: [
      { image: 'assets/images/PIF/Picture18.png', label: 'PIF' },
      { image: 'assets/images/PIF/Picture19.jpg', label: 'PIF' },
      { image: 'assets/images/PIF/Picture20.png', label: 'PIF' },
      { image: 'assets/images/PIF/Picture21.png', label: 'PIF' },
      { image: 'assets/images/PIF/Picture22.png', label: 'PIF' },
      { image: 'assets/images/PIF/Picture23.png', label: 'PIF' },
      { image: 'assets/images/PIF/Picture24.png', label: 'PIF' },

      { image: 'assets/images/Government/Picture16.jpg', label: 'PIF' },
      { image: 'assets/images/Government/Picture15.png', label: 'PIF' },
      { image: 'assets/images/PIF/TBC.png', label: 'PIF' },
      { image: 'assets/images/PIF/talimia.png', label: 'PIF' },
      { image: 'assets/images/Government/Picture9.png', label: 'Banking & Finance' },
    ],
    healthcare: [
      { image: 'assets/images/Healthcare/Picture26.png', label: 'Healthcare' },
      { image: 'assets/images/Government/مستشفى_الملك.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/الملك_فهد.jpg', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture28.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture29.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture30.png', label: 'Healthcare' },
    ],
    telecom: [
      { image: 'assets/images/Telecoms/Picture33.png', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture34.png', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture36.png', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture37.png', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture38.png', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture39.jpg', label: '5G Network' },
      { image: 'assets/images/Telecoms/Picture40.jpg', label: '5G Network' },
    ]
  };

  setActiveTab(tabKey: string) {
    this.activeTab = tabKey;
  }
}
