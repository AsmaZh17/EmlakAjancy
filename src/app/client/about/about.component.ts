import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  why: any[] = [];
  
  constructor(private Service : CrudService) {}
  ngOnInit(): void {
    this.getWhy();
  }
  getWhy(){
    this.Service.getWhy().subscribe({
      next: (res) => { 
        this.why = res; 
      },
      error: console.log,
    })
  }
}
