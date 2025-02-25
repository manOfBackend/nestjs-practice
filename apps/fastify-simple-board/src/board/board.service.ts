import { Injectable } from '@nestjs/common';

interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  userId: number;
}

@Injectable()
export class BoardService {
  private posts: Post[] = [];

  createPost(userId: number, title: string, content: string, image?: string): Post {
    const post = { id: this.posts.length + 1, title, content, image, userId };
    this.posts.push(post);
    return post;
  }

  getAllPosts(): Post[] {
    return this.posts;
  }

  deletePost(postId: number, userId: number): boolean {
    const index = this.posts.findIndex((p) => p.id === postId && p.userId === userId);
    if (index === -1) return false;
    this.posts.splice(index, 1);
    return true;
  }
}
