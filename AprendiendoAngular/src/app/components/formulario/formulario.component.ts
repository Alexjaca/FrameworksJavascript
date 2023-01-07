import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public user: any;
  public campo!: string;

  constructor(){

    this.user = {
      nombre: '',
      apellidos: '',
      biografia: '',
      genero: ''
    };

  }

  onSubmit(){
    alert("Formulario Enviado");
    console.log(this.user);
  }

  hasDadoClick(){
    alert("Has dado Click!!!! usando el evento (Click)");
  }

  hasSalido(){
    alert("Has salido del input usando el evento (blur)");
  }

  hasDadoEnter(){
    alert("Has dado enter usando el evento (keyup)");
  }

}
