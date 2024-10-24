import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from "axios";

@Injectable({
  providedIn: 'root'
})
export class SpecificService {

  constructor() { }

  private apiUrl = 'http://localhost:3000/api';

  getRecordsByField(entityType: string, field: string): Promise<AxiosResponse<any[]>> {
    return axios.get(`${this.apiUrl}/${entityType}/${field}`);
  }

  getCounts(entityType: string): Promise<AxiosResponse<any[]>> {
    return axios.get(`${this.apiUrl}/${entityType}/count`);
  }
}
