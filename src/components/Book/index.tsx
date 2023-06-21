import Image from "next/image";



interface BookProps {
    book: {
        image: string,
        title: string,
    }
}

export function Book({book}:BookProps) {
    return (

        <section>
            <Image src={book.image} width={148} height={266} alt={book.title}/>
        </section>

    )
}