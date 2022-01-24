import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public codigoRMA: number = 123456;
  public nome: string = 'Amanda';
  public nota1: number = 5;
  public nota2: number = 3;
  public nota3: number = 10;
  public nota4: number = 10;
  public media: number =
    (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;
  public aprovado: boolean = true;
  public reprovado: boolean = false;
  public foto: string = 'assets/img/web.png';
  datavalidade: string = '2022-12-15';

  constructor() {
    //variavel com concatenação

    console.log('CodigoRMA :', (this.codigoRMA = 2550));
    console.log('Nome :', this.nome);
    console.log('Nota1 :', this.nota1);
    console.log('Nota2 :', this.nota2);
    console.log('Nota3 :', this.nota3);
    console.log('Nota4 :', this.nota4);
    console.log('Media :', this.media);

    this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4;

    this.media;


    if (this.media >= 7) {
      console.log('Está Aprovado !', this.media);
    } else {
      console.log('Está Reprovado ! ', this.media);
    }
  }
  ngOnInit(): void {}
}
