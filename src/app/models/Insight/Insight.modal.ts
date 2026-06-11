import { BaseEntity } from "../base-entity";
import { User } from "../User/User.modal";

export interface InsightInterface extends BaseEntity {
  id: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: string;
  category_ar: string;
  imagePath: string;
  publishedDate: Date | string;
  linkPost: string;
  linkPostSecondary: string | null;
  archived: boolean;
  userId: number;
  user?: User;
}

export interface InsightDto {
  id: number;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  category: string;
  category_ar: string;
  imagePath: string;
  publishedDate: Date | string;
  linkPost: string;
  linkPostSecondary?: string;
  archived: boolean;
  userId: number;
  userName?: string;
  createdAt: Date; 
  updatedAt: Date;
}

