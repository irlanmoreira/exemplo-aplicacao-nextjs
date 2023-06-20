import Image from 'next/image'
import styles from './page.module.scss'
import Button from '../components/Button'
import { Book } from '@/components/Book'
import Link from 'next/link'

export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Encontre as melhores indicações de livros</h1>
      <div className={styles.books}>
        {new Array(25).fill(0).map((_, index) =>
          <Link key={index} href={`book/${index}`}>
            <Book />
          </Link>)}

      </div>

    </main>
  )
}
