import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private _document ) { 
    this.loadSettings();
  }

  saveSettings() {   
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
  }

  loadSettings() {
    if(localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    
    this.applyTheme( this.ajustes.tema );
  }

  applyTheme( tema: string ) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.saveSettings();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
