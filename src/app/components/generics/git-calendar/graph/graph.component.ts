import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  k = "l"

  match: any;
  get data(): any {
    return this.match;
  }
  @Input() set data(value: any) {
    this.match = value;
    if (this.match !== undefined) {
      this.setData();
    }
  }
  @Input('colorLevel1')
  colorLevel1!: string;
  @Input('colorLevel2')
  colorLevel2!: string;
  @Input('colorLevel3')
  colorLevel3!: string;

  inicialHeight!: number;
  inicialWidth!: number;
  constanteHeight: number = 0;
  constanteWidth: number = 0;

  dias: any = []

  realMatch: any = {}

  constructor() { }

  ngOnInit() {
  }

  dataAtualFormatada(data: any) {
    let
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return mesF + "/" + diaF + "/" + anoF;
  }

  setData() {
    this.inicialHeight = window.screen.height;
    this.inicialWidth = window.screen.width;

    for (let i = 0; i < this.match.length; i++) {
      this.realMatch[(new Date("" + this.match[i][0])).toDateString()] = this.match[i][1]
    }

    var end = new Date();

    var start = new Date();
    start.setFullYear(end.getFullYear() - 1);

    let loop = new Date(start);

    while (loop <= end) {
      let string_data = this.dataAtualFormatada(loop)

      if (this.realMatch[loop.toDateString()] == undefined) {
        this.dias.push({
          stringData: string_data,
          "data-level": 0,
          msg: `No Contributions on ${loop.toDateString()}`
        })
      } else {
        this.dias.push({
          stringData: string_data,
          "data-level": parseInt(this.realMatch[loop.toDateString()]),
          msg: `${this.realMatch[loop.toDateString()]} contributions on ${loop.toDateString()}`
        })
      }

      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
  }

  onResize(event: any): void {
    this.constanteHeight = event.target.innerHeight / this.inicialHeight;
    this.constanteWidth = event.target.innerWidth / this.inicialWidth;
  }

  getColor(dia: any) {
    switch (dia['data-level']) {
      case 0:
        return '';
      case 1:
      case 2:
      case 3:
        return this.colorLevel1;
      case 4:
      case 5:
      case 6:
        return this.colorLevel2;
      default:
        return this.colorLevel3;
    }
  }
}