import { Assessment } from '@/components/Assessment/Assessment'
import style from './style.module.scss'
import { Lexend } from 'next/font/google'
import Image from 'next/image'
import Button from '@/components/Button'
import { Comment } from '@/components/Comment'
import { httpClient } from '@/services/api'

interface Book {
    id: number,
    image: string,
    title: string,
    abstract: string,
    author: string,
    comments: number[]
}

const lexend = Lexend({ subsets: ['latin'] })
export default async function BookPage({ params }: { params: { id: string } }) {

    const { data: book } = await httpClient.get<Book>(`/books/${params.id}`)


    return (
        <main className={style.main}>
            <div className={style.containerLeft}>

                <Image src={book.image} width={200} height={296} alt="" />
                <span className={style.title}>{book.title}</span>
                <span className={style.author}>{book.author}</span>
                <Button typeButton='secundary'>Adicionar à biblioteca</Button>

            </div>
            <div className={style.containerRight}>
                <h1 className={lexend.className}>{book.title}</h1>
                <Assessment note={4.5} assessmentNumber={1} />
                <p>
                    {book.abstract}
                </p>
                <section className={style.comments}>
                    <h2>Comentários:</h2>
                    <div className={style.commentsContainer}>
                        {book.comments.map(async commentId => {
                            const { data: comment } = await httpClient.get(`/comments/${commentId}`)
                            return < Comment key={commentId} comment={comment} />
                        })}
                    </div>
                </section>
            </div>
        </main>
    )
}