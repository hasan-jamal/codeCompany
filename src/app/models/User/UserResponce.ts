import { UserDto } from "./User.modal";

export interface UserResponce {
   user: {
    data: UserDto[];
    sortable: { [key: string]: string };
    pagination: {
      currentPage: number,
      pageCount: number,
      pageSize: number,
      rowCount: number
    },
  };
}