import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../../../../services/ModalService';

@Component({
  selector: 'app-ai-digital-twin',
  imports: [CommonModule],
  templateUrl: './ai-digital-twin.component.html',
  styleUrls: ['./ai-digital-twin.component.css',
           '../../../../../../../assets/css/pages/serviceDetails.css',
           '../../../../../../../assets/css/sections/contactSection.css',
           '../../../../../../../assets/css/pages/ourServcies.css',
        ],
  encapsulation: ViewEncapsulation.None,
})
export class AiDigitalTwinComponent implements OnInit{
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  constructor(private modalService: ModalService){}
  mainVideo: any;
  plyrList : any[]= [
    {
        src: 'https://res.cloudinary.com/dx2ah9foq/video/upload/v1746881529/videoOne_gpt6dw.mp4',
        type: 'video/mp4',
      title: 'Curious to see how an AI Digital Twin works in real-world settings?',
      subTitle: 'This short video offers a walkthrough of how CODE creates and manages a live, data-driven digital twin of your facility — transforming day-to-day operations into smarter, safer decisions.',
      img:'assets/images/Frame-398-min.png'
    }
  ];
  ngOnInit(): void {
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
        this.videoPlayer.nativeElement.play().catch(() => {}); 
      } 
    });
  }
  openTalkCodeModal() {
    this.modalService.open('modalTalkCode');
  }
}
