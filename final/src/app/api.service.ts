import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  addNewDepot(data){
    return this.http.post(environment.api+'/depots/add',data)
  }

  getListDepots(){
    return this.http.get(environment.api+'/depots/list')
  }


  addNewProduct(data){
    return this.http.post(environment.api+'/products/add',data)
  }

  getListProducts(){
    return this.http.get(environment.api+'/products/list')
  }


  deleteProductByID(id){
    return this.http.delete(environment.api+'/products/delete/'+id)
  }

  findProductById(id){ 
    return this.http.get(environment.api+'/products/details/'+id)
  }

  updateProductById(id,data){
    return this.http.post(environment.api+'/products/update/'+id,data)
  }


  addNewClient(data){
    return this.http.post(environment.api+'/clients/add',data)
  }

  getListClients(){
    return this.http.get(environment.api+'/clients/list')
  }


  validateOrder(data){
    return this.http.post(environment.api+'/sells/add',data)
  }
}
