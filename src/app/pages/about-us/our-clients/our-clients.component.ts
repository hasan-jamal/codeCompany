import { Component, ViewEncapsulation } from '@angular/core';
import { PeopleSayingComponent } from '../../../shared/people-saying/people-saying.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  constructor(public router:Router){}
  tabs = [
    { key: 'government', label: 'Government', bgColor: '#FCE8EB' },
    { key: 'pif', label: 'PIF', bgColor: '#FFEEE3' },
    { key: 'healthcare', label: 'Healthcare', bgColor: '#DBF0FF' },
    { key: 'telecom', label: 'Telecom', bgColor: '#C9F4FB' }
  ];

  tabContent: { [key: string]: { image: string; label: string }[] } = {
    government: [
      { image: 'assets/images/Government/Picture2.png', label: 'Government' },
      { image: 'assets/images/Government/Government1.png', label: 'Government' },
      { image: 'assets/images/Government/Government2.png', label: 'Government' },
      { image: 'assets/images/Government/Government3.png', label: 'Government' },
      { image: 'assets/images/Government/Government4.png', label: 'Government' },
      { image: 'assets/images/Government/Government5.png', label: 'Government' },
      { image: 'assets/images/Government/Government6.png', label: 'Government' },
      { image: 'assets/images/Government/Picture3.jpg', label: 'Government' },
      { image: 'assets/images/Government/Government7.png', label: 'Government' },
      { image: 'assets/images/Government/Ministry_of_Affairs.png', label: 'Government' },
      { image: 'assets/images/Government/MODON-Saudi-Authority-for-Industrial-Cities-and-Technology-Zones.png', label: 'Government' },
      { image: 'assets/images/Government/Martyrs-Fund.png', label: 'Government' },
      { image: 'assets/images/Government/Picture4.png', label: 'Government' },
      { image: 'assets/images/Government/Logo_of_the_Saudi_Authority_for_Intellectual_Property.png', label: 'Government' },
      { image: 'assets/images/Government/Logo_Ministry_of_Commerce.png', label: 'Government' },
      { image: 'assets/images/Government/National_Development_Fund.png', label: 'Government' },
      { image: 'assets/images/Government/Picture5.png', label: 'Government' },
      { image: 'assets/images/Government/Picture6.png', label: 'Government' },
      { image: 'assets/images/Government/Picture7.png', label: 'Government' },
      { image: 'assets/images/Government/Picture8.png', label: 'Government' },
      { image: 'assets/images/Government/Picture10.png', label: 'Government' },
      { image: 'assets/images/Government/Picture11.png', label: 'Government' },
      { image: 'assets/images/Government/Picture12.jpg', label: 'Government' },
      { image: 'assets/images/Government/Picture13.png', label: 'Government' },
      { image: 'assets/images/Government/Picture14.png', label: 'Government' },
      { image: 'assets/images/Government/King_Hospital.png', label: 'Government' },
      { image: 'assets/images/Government/Government8.png', label: 'Government' },
      { image: 'assets/images/Government/!Imam_Abdulrahman_Bin_Faisal_University_Logo.svg', label: 'Government' },
      { image: 'assets/images/Government/Saudi_Space_Agency_Logo.svg', label: 'Government' },
      { image: 'assets/images/Government/Riyadh-Municipality.png', label: 'Government' },
    ],
    telecom: [
      { image: 'assets/images/Telecoms/Picture33.png', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture34.png', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture36.png', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture37.png', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture38.png', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture39.jpg', label: 'Telecom' },
      { image: 'assets/images/Telecoms/Picture40.jpg', label: 'Telecom' },
    ],
    healthcare: [
      { image: 'assets/images/Healthcare/Picture26.png', label: 'Healthcare' },
      { image: 'assets/images/Government/King_Hospital.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/King-Fahd.jpg', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture28.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture29.png', label: 'Healthcare' },
      { image: 'assets/images/Healthcare/Picture30.png', label: 'Healthcare' },
    ],
    pif: [
      { image: 'assets/images/PIF/Picture18.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture19.jpg', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture20.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture21.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture22.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture23.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/Picture24.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/Government/Picture16.jpg', label: 'PIF & Semi Government' },
      { image: 'assets/images/Government/Picture15.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/TBC.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/PIF/talimia.png', label: 'PIF & Semi Government' },
      { image: 'assets/images/Government/Picture9.png', label: 'PIF & Semi Government' },
    ],
  };

  setActiveTab(tabKey: string) {
    this.activeTab = tabKey;
  }
  getTabClasses(tabKey: string): { [key: string]: boolean } {
    return {
      'tabItem': true,
      'colorFour': true,
      'font-medium': true,
      'subtitle24px': true,
      'fxCard': true,
      'active': this.activeTab === tabKey,
      [`active-${tabKey}`]: this.activeTab === tabKey
    };
  }
}
