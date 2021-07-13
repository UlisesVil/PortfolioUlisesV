import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://portfolio-mail-service.herokuapp.com/download';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  downloadFile(x: string): Observable<any>{
    const param =new HttpParams().set('filename', x);
    const options = {
      params:param
    };
    return this.http.get(url, {...options, responseType: 'blob'});
  }
}
