import { Component, OnInit } from '@angular/core';
import { VinylService } from '../../services/vinyl.service';
import { Vinyl } from '../../common/vinyl';

@Component({
  selector: 'app-vinyl-list',
  templateUrl: './vinyl-list.component.html',
  styleUrl: './vinyl-list.component.css',
})

// inject the VinylService
export class VinylListComponent implements OnInit {
  vinyls: Vinyl[] = [];
  constructor(private vinylService: VinylService) {}

  ngOnInit() {
    this.vinylService.getVinylList().subscribe({
      next: (data) => {
        this.vinyls = data;
      },
      error: (error) => {
        console.error('Error fetching vinyls:', error);
      },
      complete: () => {
        console.log('Fetching vinyls completed.');
      },
    });
  }
}
