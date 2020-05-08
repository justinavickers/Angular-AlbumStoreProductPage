import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  constructor(private _http:Http) { }

  getAlbum(id:number) {
    return this._http.get(_albumURL)
    .map(response => response.json())
    }
}
const _albumURL = '../assets/album.json'




