import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';
import { ServiceService } from './services/margarita.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ServiceService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent implements OnInit {
  cocteles: any;

  constructor(private coctelesService: ServiceService) { }

  ngOnInit(): void {
    this.coctelesService.obtenerCocteles().subscribe((data) => {
      this.cocteles = data.drinks;
    });
  }
}
