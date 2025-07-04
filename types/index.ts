export interface Book {
  id: string;
  title: string;
  author: string;
  cover_url?: string;
  user_id: string;
}

export interface Quote {
  id: string;
  content: string;
  tags?: string[];
  book_id: string;
  user_id: string;
}
