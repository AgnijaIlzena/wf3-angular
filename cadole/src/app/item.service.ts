import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';

export type ApiResponse =  {
  Response: string;
  Search: Item[];
  totalResults: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  apiUrl: string = 'http://www.omdbapi.com/?apikey=5e0503a3';
  
  searchItem(name: string){
  return this.httpClient.get<any>(`${this.apiUrl}&s=${name}`);
}

  constructor(private httpClient: HttpClient) { }
}
