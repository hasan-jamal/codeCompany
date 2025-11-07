import { SubServiceDto } from "./SubService.modal";

export interface SubServiceResponse {
   subService: {
    data: SubServiceDto[];
    sortable: { [key: string]: string };
    pagination: {
      currentPage: number,
      pageCount: number,
      pageSize: number,
      rowCount: number
    },
  };
}