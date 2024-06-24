import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = `${base_url}/posts`;
  private listaCambio = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Post[]>(this.url);
  }

  insert(p: Post) {
    return this.httpClient.post(this.url, p);
  }

  setList(listaNueva: Post[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.httpClient.get<Post>(`${this.url}/${id}`);
  }

  update(p: Post) {
    return this.httpClient.put(this.url, p);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
