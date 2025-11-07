import { BaseEntity } from "../base-entity";
import { SubService } from "../SubService/SubService.modal";
import { User } from "../User/User.modal";

export interface ServiceInterface extends BaseEntity{
  id: number;
  title: string;
  title_ar: string;
  imageService: string;
  archived: boolean;
  userId: number;
  user?: User;
  subServices?: SubService[];
  serviceSections?: ServiceSection[];
  slug: string;
}
export interface ServiceDto {
  id: number;
  title: string;
  title_ar: string;
  imageService: string;
  archived: boolean;
  userId: number;
  userName?: string;
  createdAt: Date; 
  updatedAt: Date;
  slug: string;
    sections?: {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
  }[];
}
export interface ServiceSection extends BaseEntity{
  id: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  imageUrl: string;
  serviceId?: number;
  service?: ServiceInterface;
}
export interface ServiceSectionsDto {
    id: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  serviceId?: number;
  serviceTitle?: string;
  imageUrl: string;
}
export interface UpdateServiceSectionsDto {
  id: number;
  serviceId?: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  imageUrl: string;
}