import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TequilaService } from './service/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent implements OnInit {
  cocteles: any[] = [];

  constructor(private coctelesSerivcio: TequilaService) { }

  ngOnInit(): void {
    this.coctelesSerivcio.obtenerCocteles().subscribe(datos => {
      this.cocteles = datos.drinks;
    });
  }
}
