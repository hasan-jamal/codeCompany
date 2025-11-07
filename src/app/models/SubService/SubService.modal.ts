import { BaseEntity } from "../base-entity";
import { ServiceInterface } from "../Service/Service.modal";
import { User } from "../User/User.modal";

export interface SubService extends BaseEntity{
  id: number;
  title: string;
  title_ar: string;
  serviceBrief: string;
  serviceBrief_ar: string;
  imageSubService: string;
  archived: boolean;
  serviceId: number;
  service?: ServiceInterface;
  userId: number;
  user?: User;
  subServiceSections?: SubServiceSection[];
  slug: string;
}
export interface SubServiceDto {
  id: number;
  title: string;
  title_ar: string;
  serviceBrief: string;
  serviceBrief_ar: string;
  imageService: string;
  archived: boolean;
  userId: number;
  serviceId: number;
  userName?: string;
  serviceName?: string;
  createdAt: string; 
  updatedAt: string;
  slug: string;
}
export interface SubServiceSection extends BaseEntity{
  id: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  imageUrl: string;
  subServiceId: number;
  subService?: SubService;
}
export interface SubServiceSectionsDto {
  id: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  subServiceId?: number;
  subServiceTitle?: string;
  imageUrl: string;
}

export interface UpdateSubServiceSectionsDto {
  id: number;
  subServiceId?: number;
  title: string;
  title_ar: string;
  subtitle: string;
  subtitle_ar: string;
  description: string;
  description_ar: string;
  imageUrl: string;
}
