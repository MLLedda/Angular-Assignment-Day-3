import { Injectable } from '@angular/core';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
    { id: 1, title: 'Blog 1', description: 'Description 1', author: 'Author A', comments: ['Comment 1'] },
    { id: 2, title: 'Blog 2', description: 'Description 2', author: 'Author B', comments: ['Comment 2'] },  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }
}
