import { Component, OnInit } from '@angular/core';
import { InsightDto } from '../../../../../../models/Insight/Insight.modal';
import { InsightResponse } from '../../../../../../models/Insight/Insight.Response';
import { InsightService } from '../../../../../../services/Insight.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-insight',
  standalone: false,
  templateUrl: './table-insight.component.html',
  styleUrl: './table-insight.component.css'
})
export class InsightsTableComponent implements OnInit {
    response: InsightResponse | undefined;
    selectedSort: string = '';
    searchText: string = '';
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
    isDeleteModalOpen = false;
    insightToDelete!: InsightDto;

  constructor(
    private insightService: InsightService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getInsights();
  }

  getInsights(): void {
    this.insightService
      .getAllInsights(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
      .subscribe({
        next: (data: InsightResponse) => {
          if (data && data.insights) {
            this.response = data;
            const rowCount = data.insights.pagination?.rowCount ?? 0;
            this.totalPages = Math.ceil(rowCount / this.pageSize);
          } else {
            console.warn('No insights data returned from API');
            this.response = {} as InsightResponse;
            this.totalPages = 0;
          }
        },
        error: (error) => {
          console.error('Error loading insights:', error);
          this.response = {} as InsightResponse;
          this.totalPages = 0;
        },
      });
  }

  changeNotActivation(insightId: number, insight: InsightDto) {
    this.insightService.unArchiveInsight(insightId).subscribe({
      next: () => {
        this.toastr.success('The insight has been removed from archived items', 'Insight Unarchived!');
        insight.archived = false;
        this.getInsights();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error?.message || err.message, 'Error!');
      }
    });
  }

  changeActivation(insightId: number, insight: InsightDto) {
    
    this.insightService.archiveInsight(insightId).subscribe({
      next: () => {
        this.toastr.success('The insight has been added to archived items', 'Insight Archived!');
        insight.archived = true;
        this.getInsights();
      },
      
      error: (err) => this.toastr.error(err.error?.message || err.message, 'Error!')
    });
  }

  openDeleteModal(insight: InsightDto) {
    this.insightToDelete = insight;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }

  confirmDelete() {
    if (!this.insightToDelete) return;
    this.insightService.deleteInsight(this.insightToDelete.id).subscribe({
      next: () => {
        this.toastr.success('The insight has been deleted successfully', 'Success');
        this.getInsights();
        this.closeDeleteModal();
      },
      error: (err) => {
        this.toastr.error('An error occurred while deleting the insight', 'Error');
        console.error(err);
      }
    });
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.getInsights();
  }
}
