import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubServiceSectionsService } from '../../../../../../../services/SubServiceSections';
import { SubServiceSectionsDto } from '../../../../../../../models/SubService/SubService.modal';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableSectionsComponent implements OnInit {
  subServiceId!: number;
  sections: SubServiceSectionsDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private _subServiceSectionsService: SubServiceSectionsService
  ) {}

  ngOnInit(): void {
    this.subServiceId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSections();
    console.log(this.sections);
  }

  loadSections() {
    this._subServiceSectionsService.getSectionsBySubServiceId(this.subServiceId).subscribe({
      next: (data) => {
        console.log(data);
        this.sections = data;
      },
      error: (err) => console.error('Error loading sections:', err)
    });
  }
}
