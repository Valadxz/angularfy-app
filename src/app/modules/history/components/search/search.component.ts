import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  src: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    const searchTerm = term.trim().toLowerCase(); // Convertir a minúsculas y quitar espacios al inicio y al final
  
    if (searchTerm.length >= 3) {
      this.callbackData.emit(searchTerm);
    } else {
      // Si el término de búsqueda es menor a 3 caracteres, emitir una cadena vacía para borrar los resultados
      this.callbackData.emit("");
    }
  }

}
