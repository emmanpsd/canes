import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canes Club</title>
        <meta name="description" content="built with nextjs + typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <img className={styles.logo} src="https://i.ibb.co/qkBv0Vq/New-Project-2.png" />
        </div>
        <div>
        </div>
      </div>

      <main className={styles.main}>

        <div className={styles.intro}>
          <div>
            <img src="https://i.ibb.co/6ysr6G6/Screen-Shot-2023-05-26-at-3-00-20-PM.png" style={{ height: '9em', width: '9em', borderRadius: 100, }} />
          </div>
          <h2>CANES CLUB 🚫6️⃣3️⃣</h2>
          <p>Welcome to Canes Club, where talented graphic designers, video editors, and creative enthusiasts unite over our shared love for Canes Chicken! 🐔💻🎨 Join our vibrant community for collaboration, inspiration, and finger-lickin' creativity. 🎬🖌️ #CanesClub </p>
        </div>

        <button className={styles.button} style={{ background: 'rgba(209, 25, 32, 0.85' }}><a href="https://twitter.com/canes_club">Canes Club </a></button>
        <button className={styles.button} style={{ background: 'rgba(209, 25, 32, 0.85' }}><a href="https://drive.google.com/drive/folders/1f-jqBTQrEE0u-8pNGOB-XreL3ep94mqa">Canes Club Assets </a></button>
        <button className={styles.button2} style={{ background: 'rgba(80,253,22, 0.85'}}><a href="https://kick.com/canesclub">Canes Club Kick </a></button>
        <button className={styles.button} style={{ background: 'rgba(114,137,218, 0.85' }}><a href="https://discord.com/invite/HdnDq35HPa">Canes Club Discord </a></button>
    



      </main>


    </div>
  )
}

export default Home
