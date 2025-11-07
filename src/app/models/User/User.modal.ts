import { BaseEntity } from "../base-entity";
import { ServiceInterface } from "../Service/Service.modal";
export interface User {
  id: number;
  username: string;
  token?: string;
  isAdmin?: boolean;
}
export interface UserInterface  extends BaseEntity{
    fullName: string,
    password: string,
    phoneNumber: string,
    imageUrl: string,
    dateOfBirth: string,
    gender: number,
    email: string,
    city: number,
    fullAddress: string,
    createdAt:Date,
    updatedAt: Date,
    archived: string,
    id: number,
    serviceName:string[],
    services:ServiceInterface[],
    isUser: boolean,
    isAdmin: boolean,   
}
export interface UserDto {
    fullName: string,
    password: string,
    phoneNumber: string,
    imageUrl: string,
    dateOfBirth: string,
    gender: number,
    email: string,
    city: string,
    createdAt:string,
    updatedAt: string,
    archived: string,
    id: number,
    serviceName:string[],
    services:ServiceInterface[],
    isUser: boolean,
}
export interface UserRegistrationModel {
    id: number,
    fullName: string,
    password: string,
    phoneNumber: string,
    imageUrl: string,
    dateOfBirth: string,
    gender: number,
    email: string,
    city: string,
    isUser: string,
}
export interface LoginUserResponse {
    id: number;
    fullName: string;
    image: string | null;
    phoneNumber: string;
    password: string,
    isAdmin: boolean;
    token: string;
}
export interface UpdateUserProfileVM{
    fullName: string,
    password: string,
    phoneNumber: string,
    imageUrl: string,
    dateOfBirth: string,
    gender: number,
    email: string,
    city: string,
    id: number,
}