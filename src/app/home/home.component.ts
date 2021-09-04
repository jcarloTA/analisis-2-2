import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position','name', 'description', 'type'];
  dataSource: any[];
  constructor(public inventarioService: InventarioService) { 
    this.dataSource = this.inventarioService.inventario;
  }

  ngOnInit(): void {
  }

}
