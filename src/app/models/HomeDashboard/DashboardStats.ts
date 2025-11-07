import { BaseEntity } from "../base-entity";

export interface DashboardStats  extends BaseEntity{
  newsCount: number;
  usersCount: number;
}