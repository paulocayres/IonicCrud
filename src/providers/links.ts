import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { LinksDetalhe } from "../pages/links/links-detalhe/links-detalhe";

/*
  Generated class for the Links provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LinksService {

  //links: Array<{title: string, descricao: string, component: any}>;

  links: Array<{nome: string, data: string, hora: string, pais: string, uf: string, municipio: string, codpostal: string}>;

  //links: any;

  constructor(public http: Http) {
    this.links = [
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Paulo Cayres", data: "09/12/1976", hora: "03:30", pais: "Brasil", uf: "MG", municipio: "Caxambú", codpostal: "37440-000"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
      {nome: "Christine Magalhães", data: "19/09/1981", hora: "03:30", pais: "Brasil", uf: "DF", municipio: "Brasília", codpostal: "70775-040"  },
    ]

  }

  getLinks(){
    return this.links;
  }

  insert(link){
    this.links.push(link);
  }

  update(link,index){
    this.links[index] = link;

  }

  excluir(index){
    this.links.splice(index,1);
  }



}
