import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  public pics: any;
  public searchText: string = '';
  public searchPic = '../../assets/images/default.png';
  constructor(private service:ApiServiceService)
  {

  }
  ngOnInit() {
    this.getBreedsPic();
  }

  getBreedsPic(): void {
    this.service.getBreedsPic()
        .subscribe(response => {

        this.pics = response.message;
        console.log("pics",this.pics)
    });
  }
  showDogs()
  {
    this.service.apiCall(this.searchText.toLowerCase()).subscribe((data) =>{
      this.data = data;
      console.log("data",data)
      if(data.status === "success"){
        this.searchPic = data.message;
      } else {
        this.searchPic = '../../assets/images/default.png';
      }
    })
  }
}
