import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable'

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api: string = 'http://www.mednesp2019.com.br/admin/index.php/consulta/json_table/';
  //tabela:string;

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
    //this.tabela;
  }

  getData(tabela){
      return this.http.get(this.api+tabela).map(res => res.json())
  }

//teste
  getTabela(tabela){
    //console.log(tabela+' adriano ');
    return this.http.get(this.api+tabela).map(res => res.json()).subscribe(data => console.log(data))
  }

}
