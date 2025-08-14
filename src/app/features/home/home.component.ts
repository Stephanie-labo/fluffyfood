import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentWeather?: any;
  temperature: number = 0;
  weatherCode: number = 0;

  location: string = '';
  consent = false;
  constructor(
    private apiService: ApiService,

  ) {}

  ngOnInit() {
    this.openDialog();
  }
  closeDialog() {
    const dialog = document.getElementById('dialog') as HTMLDialogElement;
    dialog.close();
  }
  getCurrentLocationWithDialogData(event: boolean) {
    this.consent = event;
    this.closeDialog();
  }

  openDialog() {
    const dialog = document.getElementById('dialog') as HTMLDialogElement;
    dialog.showModal();
    this.focusOnInput();
  }
  getWeaterData(event: string) {
    if (event !== '') {
      this.location = event;
      this.getCurrentWeater();
    } else if (event === '' && this.consent) {
      this.getCurrentLocation();
    }
  }
  async getCurrentWeater() {
    await this.apiService
      .getRealtimeWeather(this.location)
      .pipe(first())
      .subscribe((objects: any) => {
        console.log(objects);
        this.currentWeather = objects;
        this.location = this.currentWeather?.location?.name;
        this.temperature = this.currentWeather.data.values.temperature;
        this.weatherCode = this.currentWeather.data.values.weatherCode;
      });
  }

  focusOnInput() {
    const input = document.getElementById('location') as HTMLInputElement;
    input.focus();
  }

  public getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
  }
  success(position: any) {
    this.location = `${position.coords.latitude},${position.coords.longitude}`;
    this.getCurrentWeater();
  }
  error() {
    alert('Sorry, geen locatie beschikbaar.');
  }
}
