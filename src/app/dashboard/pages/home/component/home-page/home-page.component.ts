import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../../../../services/news.service';
import { CurrentUserService } from '../../../../../services/currentUser.service';
import { NewsResponse } from '../../../../../models/News/News.Response';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardStats } from '../../../../../models/HomeDashboard/DashboardStats';
import { DashboardService } from '../../../../../services/DashboardService';
import { InsightService } from '../../../../../services/Insight.service';
import { InsightResponse } from '../../../../../models/Insight/Insight.Response';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule, 
    NgxPaginationModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  insightsResponse: InsightResponse | undefined; 
  selectedSort: string = '';
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  stats?: DashboardStats;
  curSlide = 0;

  constructor(
    private _insightService: InsightService,
    private currentUserService: CurrentUserService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getInsights();

    this.dashboardService.getDashboardStats().subscribe({
      next: (data) => this.stats = data,
      error: (err) => console.error(err)
    });
  }

  // الدالة الجديدة لجلب بيانات الـ Insights
  getInsights(): void {
    this._insightService.getAllInsights(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
      .subscribe({
        next: (data) => {
          this.insightsResponse = data;
          // افترضت أن الهيكلية تشبه الأخبار (insights بدلاً من news)
          this.totalPages = Math.ceil(data.insights.pagination.rowCount / this.pageSize);
        },
        error: (err) => {
          console.error('Error loading insights:', err);
        },
      });
  }

  // تطبيق التحسين الآمن لحساب الحد الأقصى للسلايدر
  get maxSlide() {
    return (this.insightsResponse?.insights?.data?.length || 1) - 1;
  }

  nextSlide() {
    if (!this.insightsResponse?.insights?.data) return;
    this.curSlide = this.curSlide === this.maxSlide ? 0 : this.curSlide + 1;
  }

  prevSlide() {
    if (!this.insightsResponse?.insights?.data) return;
    this.curSlide = this.curSlide === 0 ? this.maxSlide : this.curSlide - 1;
  }
}