import Image from 'next/image'
import styles from './page.module.css'
import Button from '../components/button'

export default function Home() {

  const buttons =  ['oi', 'teste', 'outro']

  return (
    <main>
      <h1>Hello world!</h1>
      <Button />
      
      
    </main>
  )
}
