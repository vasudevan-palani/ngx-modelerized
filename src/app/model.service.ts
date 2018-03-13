import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ModelService {

  constructor(private http: HttpClient) { }

  getModel(modelName : String) : Promise<any>{
    return this.http.get(environment.api+modelName).toPromise();
  }

  deleteModel(modelName : String) : Promise<any>{
    return this.http.delete(environment.api+modelName).toPromise();
  }

  submitModel(modelName : String, modelValue : any) : Promise<any>{
    return this.http.post(environment.api+modelName, modelValue).toPromise();
  }

}
