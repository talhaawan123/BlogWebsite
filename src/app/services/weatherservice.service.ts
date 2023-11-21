import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  private apiKey = '6f6afe8e69msh7b12ddbc3f5c737p1aa269jsn670c6bf47665';
  private apiUrl = '';

  constructor(private http : HttpClient) {}

  getdata( city:string, units: string ){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=8806b6b8c2df3a99da822c99e55a5db8&units='+units)
 }
}

