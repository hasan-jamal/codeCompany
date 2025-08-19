import { ServiceInterface } from "../Service/Service.modal";

export interface UserInterface {
    fullName: string,
    password: string,
    phoneNumber: string,
    imageUrl: string,
    dateOfBirth: string,
    gender: number,
    email: string,
    city: string,
    fullAddress: string,
    createdAt:string,
    updatedAt: string,
    archived: string,
    id: number,
    serviceName:string[],
    services:ServiceInterface[],
    isUser: boolean,
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
    fullAddress: string,
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
    fullName: string | null;
    image: string | null;
    phoneNumber: string;
    password: string,
    isAdmin: boolean;
    token: string;
}