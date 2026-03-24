import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-smart-facility',
  templateUrl: './ai-smart-facility.component.html',
  styleUrls: [
                '../../../../../../../assets/css/pages/serviceDetails.css',
                '../../../../../../../assets/css/sections/contactSection.css',
                '../../../../../../../assets/css/pages/ourServcies.css',
                './ai-smart-facility.component.css'
              ],
                     encapsulation: ViewEncapsulation.None,
                  standalone:false
})
export class AiSmartFacilityComponent implements OnInit{
 constructor(private modalService: ModalService){}
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
      titleKey: "AI Vision Technology in Action",
      subTitleKey: "Real-Time Awareness of Facilities and People",
      contentKey: "AI Vision enables continuous visual analysis, including:",
      listItems: [
        "Safety monitoring and hazard detection",
        "Intrusion detection and unauthorized access monitoring",
        "Slip, trip, and fall detection with Instant alerts",
        "Occupancy tracking and space utilization analysis",
        "Fire and smoke detection through visual indicators"
      ],
      extraSection: null, // لا يوجد قسم إضافي هنا
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 2,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "AI Digital Twin in Action",
      subTitleKey: "Unified 3D Interface for Facility Visibility",
      contentKey: "The digital twin provides a live 3D representation of facility infrastructure and systems:",
      listItems: [
        "Structural Systems: floors, walls, foundations, and physical zones",
        "Electrical Systems: power distribution panels, lighting circuits, and energy meters",
        "Mechanical Systems: HVAC units, chillers, air handlers, ventilation ductwork",
        "Plumbing Systems: water supply lines, drainage pipes, pumps, and valves."
      ],
      // تمت إضافة هذا القسم الفرعي ليتناسب مع الصورة
      extraSection: {
        titleKey: "Why It Matters",
        listItems: [
          "Single visual view replacing complex drawings",
          "Live data visibility mapped directly to physical assets",
          "Scalable and accessible for technical and non-technical users",
          "Faster action through instant root-cause identification"
        ]
      },
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 3,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "IoT Monitoring Coverage",
      subTitleKey: "Real-Time, 24/7 Facility Monitoring",
      contentKey: "",
      listItems: [
        "Environment: Air quality, temperature, humidity, noise level, light (lux), odor detection",
        "Utilities: Gas leaks, water leaks, pipe pressure, tank levels, soap levels, waste levels",
        "Space: Occupancy tracking, parking slots, asset tracking, desk usage, zone heat-maps",
        "Safety: Smoke and fire detection, emergency exits, intrusion detection, fence breach, panic buttons",
        "Systems: Door access, lift health, door status, HVAC status, lighting control"
      ],
      extraSection: null,
      footerContentKey: "",
      pathBtn: ""
    },
    { 
      id: 4,
      showPart2: false, 
      isAnimating: false,
      isActive: false,
      titleKey: "Robotics in Action",
      subTitleKey: "Automation for Safer and More Efficient Operations",
      contentKey: "",
      listItems: [
        "Autonomous robots perform routine cleaning and patrol.",
        "Robots respond automatically when alarms are triggered.",
        "Reduced human exposure during initial hazard verification.",
        "Zero-fatigue operations with reduced manpower dependency."
      ],
      extraSection: null,
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
}
