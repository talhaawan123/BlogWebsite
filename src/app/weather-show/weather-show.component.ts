import { Component } from '@angular/core';

import { WeatherserviceService } from '../services/weatherservice.service';
@Component({
  selector: 'app-weather-show',
  templateUrl: './weather-show.component.html',
  styleUrls: ['./weather-show.component.css']
})
export class WeatherShowComponent {
  weather:any;
  temperature:number=0;
  pressure: number=0;
  wind: number =0;
  humidity: number= 0;
  city:string='islamabad';
  units: string='imperial';
  constructor(private weatherService: WeatherserviceService){}
  private getweatherdata( city:string, unit:string){
    this.weatherService.getdata(this.city,this.units).subscribe({

      next: (result)=>{
        this.weather=result;
        console.log(this.weather)
        this.temperature= this.weather.main.temp;
        this.pressure=this.weather.main.pressure;
        this.humidity= this.weather.main.humidity;
        this.wind= this.weather.wind.speed;
        this.city=this.weather.sys[2].name;
      },
      error: (error)=> console.log(error.message),
      complete: ()=> console.info ('api completed')
    })
  }
  
  onSubmit(){
    this.getweatherdata(this.city,this.units);
    
  }
  // Assuming you have a function to get temperature, for example
isTemperatureAbove90(): boolean {
  return this.temperature > 70; // Replace with your actual temperature value
}

}
