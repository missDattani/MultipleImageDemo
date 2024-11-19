import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  urls: string[] = [];

  onSelect(eve : any){
    if(eve.target.files){
      for(let i=0; i< eve.target.files.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(eve.target.files[i]);
        reader.onload = (event: any) => {
          const result = event.target.result as string;
          this.urls.push(result);
        };
      }
    }

  }

  removeImage(index: number) {
    this.urls.splice(index, 1);
  }

}
