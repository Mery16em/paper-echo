'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Book } from '@/types';
import Link from 'next/link';

export default function DashboardPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const {
        data,
        error
      } = await supabase
        .from('books')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error('Error loading books:', error);
      else setBooks(data || []);

      setLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Books</h1>

      <Link href="/add-book" className="inline-block mb-4 bg-black text-white px-4 py-2 rounded">
        + Add Book
      </Link>

      {loading ? (
        <p>Loading...</p>
      ) : books.length === 0 ? (
        <p>No books yet. Start by adding one.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book) => (
            <div key={book.id} className="p-4 border rounded shadow bg-white">
              <h2 className="font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
