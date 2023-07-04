import Image from 'next/image'
import styles from './page.module.scss'
import Button from '../components/Button'
import { Book } from '@/components/Book'
import Link from 'next/link'
import { httpClient } from '@/services/api'

interface Book {
  id: number,
  image: string,
  title: string,
}

export default async function Home() {

  const { data } = await httpClient.get<Book[]>('/books')



  return (
    <main className={styles.main}>
      <h1>Encontre as melhores indicações de livros</h1>
      <div className={styles.books}>
        {data.map(book => {
          return (
            <Link key={book.id} href={`book/${book.id}`}>
              <Book book={book} />
            </Link>
          )
        })}

        
      </div>

    </main>
  )
}
