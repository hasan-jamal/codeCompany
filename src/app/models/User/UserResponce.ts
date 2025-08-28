import {UserInterface } from "./User.modal";

export interface UserResponse {
  user: {
    data: UserInterface[];
    sortable: { [key: string]: string };
    filterable: any;
    pagination: {
      currentPage: number;
      pageCount: number;
      pageSize: number;
      rowCount: number;
    };
  };
}