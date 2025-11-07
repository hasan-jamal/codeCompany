import { ServiceDto, ServiceInterface } from "./Service.modal";

export interface ServiceResponse {
   service: {
    data: ServiceDto[];
    sortable: { [key: string]: string };
    pagination: {
      currentPage: number,
      pageCount: number,
      pageSize: number,
      rowCount: number
    },
  };
}