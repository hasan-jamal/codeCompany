import { Component, OnInit } from '@angular/core';
import { ServiceSection, ServiceSectionsDto } from '../../../../../../../models/Service/Service.modal';
import { ActivatedRoute } from '@angular/router';
import { ServiceSectionsService } from '../../../../../../../services/serviceSections.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableSectionsComponent implements OnInit {
 serviceId!: number;
  sections: ServiceSectionsDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private serviceSectionsService: ServiceSectionsService
  ) {}

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSections();
  }

  loadSections() {
    this.serviceSectionsService.getSectionsByServiceId(this.serviceId).subscribe({
      next: (data) => {
        this.sections = data;
      },
      error: (err) => console.error('Error loading sections:', err)
    });
  }
}
