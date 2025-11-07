import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/service.service';
import { ServiceSectionsService } from '../../../../services/serviceSections.service';
import { SubServiceService } from '../../../../services/subService.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceDto } from '../../../../models/Service/Service.modal';

@Component({
  selector: 'app-service-page',
  standalone:false,
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent implements OnInit{
    service?: ServiceDto;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.serviceService.getServiceBySlug(slug).subscribe({
        next: (res) => this.service = res,
        error: (err) => console.error(err)
      });
    }
  }
}

