export interface NewsInterface{
  id: number,
  title: string,
  description: string,
  imageService: string,
  archived: boolean,
  userId: number,
  user: string,
  userName :string,
  createdAt:string,
   hashtags?: string[],
}
export interface NewsDto{
 id: number,
  title: string,
  description: string,
  imageService: string,
  archived: boolean,
  userId: number,
  user: string,
  userName :string,
  createdAt:string,
   hashtags?: string[]
}