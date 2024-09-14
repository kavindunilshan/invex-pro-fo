import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  private apiUrl = '/inventory';

  createRecord(entityType: string, data: any): Promise<AxiosResponse<any>> {
    return axios.post(`${this.apiUrl}/${entityType}/created`, data);
  }

  getRecords(entityType: string): Promise<AxiosResponse<any[]>> {
    return axios.get(`${this.apiUrl}/${entityType}`);
  }

  updateRecord(entityType: string, id: string, data: any): Promise<AxiosResponse<any>> {
    return axios.put(`${this.apiUrl}/${entityType}/${id}`, data);
  }

  deleteRecord(entityType: string, id: string): Promise<AxiosResponse<any>> {
    return axios.delete(`${this.apiUrl}/${entityType}/${id}`);
  }
}
