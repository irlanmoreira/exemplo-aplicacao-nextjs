import { Assessment } from '@/components/Assessment/Assessment'
import style from './style.module.scss'
import { Lexend } from 'next/font/google'
import Image from 'next/image'
import Button from '@/components/Button'
import { Comment } from '@/components/Comment'

const lexend = Lexend({ subsets: ['latin'] })
export default function BookPage() {
    return (
        <main className={style.main}>
            <div className={style.containerLeft}>

                <Image src="" width={200} height={296} alt="" />
                <span className={style.title}>Título do livro</span>
                <p>Lorem ipsum dolor sit amet</p>
                <span className={style.author}>Autor do livro</span>
                <Button typeButton='secundary'>Adicionar à biblioteca</Button>

            </div>
            <div className={style.containerRight}>
                <h1 className={lexend.className}>Book Page</h1>
                <Assessment note={4.5} assessmentNumber={1} />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh, vel feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue.
                </p>
                <section className={style.comments}>
                    <h2>Comentários:</h2>
                    <div className={style.commentsContainer}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </section>
            </div>
        </main>
    )
}