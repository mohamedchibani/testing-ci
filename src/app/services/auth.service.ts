import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getPost(postId: number): Observable<Post> {
    return this.http
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .pipe(
        map((data) => {
          return { ...data };
        })
      );
  }
}
