import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import Bio from '@/components/Bio';
import Project from '@/components/Project';

const inter = Inter({ subsets: ['latin'] })

const projects = [
  {
    name: 'Goodbye Lorem',
    description: 'test desc'
  },
  {
    name: 'Kiwi',
    description: 'test desc kiwi'
  }
]

export default function Home() {
  return (
    <main className={styles.portfolio}>
      <Bio className={styles.bio} />

      <div className={styles.projects}>
        <Project projects={projects} />
      </div>
    </main>
  );
}
