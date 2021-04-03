import { Component, OnInit } from '@angular/core';
import { Obra } from 'src/app/shared/model/obra.model';
import { ObraService } from 'src/app/shared/service/obra.service';

@Component({
  selector: 'app-obra-list',
  templateUrl: './obra-list.component.html',
  styleUrls: ['./obra-list.component.css']
})
export class ObraListComponent implements OnInit {
  
  obras2020: Obra[];
  obras2020_lit: Obra[];
  obras2019: Obra[];
  obras2018: Obra[];

  constructor(public obraService: ObraService) { 
    this.obras2020 = [];
    this.obras2020_lit = [];
    this.obras2019 = [];
    this.obras2018 = [];
  }

  ngOnInit(): void {
    this.getObras();
  }

  getObras(){
    this.obraService.getObrasPorCampanha('2020').subscribe(data => {
      this.obras2020 = data.data;
    });

    this.obraService.getObrasPorCampanha('2020-literario').subscribe(data => {
      this.obras2020_lit = data.data;
    });
    
    this.obraService.getObrasPorCampanha('2019').subscribe(data => {
     this.obras2019 = data.data;
    });
    
    this.obraService.getObrasPorCampanha('2018').subscribe(data => {
     this.obras2018 = data.data;
    });    
  }
}
