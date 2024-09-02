import { Component, OnInit } from '@angular/core';
import { Genre } from '../../common/genre';
import { VinylService } from '../../services/vinyl.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  vinylGenres: Genre[] = [];
  constructor(private vinylService: VinylService) {}

  ngOnInit() {
    this.listVinylGenres();
  }

  listVinylGenres() {
    this.vinylService.getVinylGenre().subscribe((data) => {
      console.log('Vinyl Genre=' + JSON.stringify(data));
      this.vinylGenres = data;
    });
  }
}
