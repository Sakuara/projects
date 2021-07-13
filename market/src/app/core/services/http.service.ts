import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService{
    public http:HttpClient;
    constructor(private Http:HttpClient){
        this.http = Http;
    }
    
    public get(url:string,params?:{[key:string]:any},options?:string | string[]):Observable<any>{
        let httpParams = new HttpParams();
        if(params){
            for (const key in params) {
                if(params[key]|| params[key] == false){
                    httpParams =httpParams.set(key,params[key]);
                }
            }
        }
        return this.http.get(url,{params:httpParams});
    }

    public post(url:string,data?:{[key:string]:any},options?:any ):Observable<any>{
        return options?this.http.post(url,data,options):this.http.post(url,data);
    }
    public put(url:string,data?:{[key:string]:any},options?:any ):Observable<any>{
        return options?this.http.put(url,data,options):this.http.put(url,data);
    }
    public delete(url:string,params?:{[key:string]:any},options?:string | string[]):Observable<any>{
        let httpParams = new HttpParams();
        if(params){
            for (const key in params) {
                if(params[key]|| params[key] == false){
                    httpParams =httpParams.set(key,params[key]);
                }
            }
        }
        return this.http.delete(url,{params:httpParams});
    }
}