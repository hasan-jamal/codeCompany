import { InsightDto } from "./Insight.modal";

export interface InsightResponse {
    insights: {
      data: InsightDto[];
      sortable: { [key: string]: string };
      pagination: {
        currentPage: number,
        pageCount: number,
        pageSize: number,
        rowCount: number
      };
    };
    users: any;
  }