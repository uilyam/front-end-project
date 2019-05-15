import { Component, OnInit } from '@angular/core';
import { TrucksLoaderService } from './services/trucks-loader.service';
import { ITruck } from './interfaces/truck.interface';
import { Observable } from 'rxjs';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  trucks$: Observable<ITruck[]>;
  favorites: string[] = [];

  constructor(private loader: TrucksLoaderService) {}

  ngOnInit() {
    this.trucks$ = this.loader.load();
  }

  onSelectionChange($event: MatSelectionListChange) {
    if ($event.option.selected) {
      this.favorites = [ $event.option.value, ...this.favorites ];
    } else {
      this.favorites = this.favorites.filter(id => id !== $event.option.value);
    }
  }

  favoritize(trucks: ITruck[]): ITruck[] {
    return trucks.filter(truck => this.favorites.includes(truck.id));
  }
}
