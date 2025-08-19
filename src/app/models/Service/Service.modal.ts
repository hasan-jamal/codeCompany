export interface ServiceInterface{
  id: number,
  title: string,
  location: number,
  description: string,
  phone: string,
  price: number,
  imageService: string,
  archived: boolean,
  userId: number,
  user: string,
  serviceRequests: string,
  userName :string
  priceMin:number,
  priceMax:number,

}
export interface ServiceDto{
 id: number,
  title: string,
  location: number,
  description: string,
  phone: string,
  price: number,
  imageService: string,
  archived: boolean,
  userId: number,
  user: string,
  serviceRequests: string,
  userName :string
  priceMin:number,
  priceMax:number,
}