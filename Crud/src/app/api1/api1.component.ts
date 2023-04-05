import { Component } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component {
  id?:string;
  nome?:string;
  email?:string;
  senha?:string;

  title?: string;
  url = "https://rhuna.herokuapp.com/crud"
  async getData(){

      await axios.get("https://rhuna.herokuapp.com/crud")
      .then((response) => {
        //this.title = response.data.title;
        //this.email = response.data.body;
        console.log(response);
        ;}
      ).catch((error) => {
        console.log(error);
      })
  }

  async post(){

    await axios.post(
      "https://jsonplaceholder.typicode.com/posts",{title: 'Meu title', body: 'cmooon' },)
      .then((response) => {
        console.log(response)
    }
    ).catch((error) => {
      console.log(error)
    });


  }

  async put(){

    await axios.put("https://jsonplaceholder.typicode.com/posts/1",
    {title: 'Meu title Atualizado', body: 'cmooon Atualizado' } )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });

  }

  async delete(){

    await axios.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log('O json foi deletado', response)
    })
    .catch((error) => {
      console.log(error)
    })
  }


}
