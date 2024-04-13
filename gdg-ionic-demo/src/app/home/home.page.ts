import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonButton, IonAvatar, IonChip, IonSearchbar, IonIcon } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonSearchbar, IonChip, IonAvatar, IonButton, IonInput, IonCol, IonRow, IonGrid, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private readonly personajesService = inject(PersonajesService);

  constructor() {}

  personajes:Personaje[] = [];

  ngOnInit(): void {
    this.personajesService.cargar(1).subscribe(personajes => this.personajes = personajes);
  }
  
  onSearchChange(event:any){
    const valor = event.target.value;
    // this.personajes = this.personajesService.buscar(valor);
  }
}
