import { NewsInterface } from "./News";

export interface NewsResponse {
   news: {
    data: NewsInterface[];
    sortable: { [key: string]: string };
    pagination: {
      currentPage: number,
      pageCount: number,
      pageSize: number,
      rowCount: number
    },
  };
}