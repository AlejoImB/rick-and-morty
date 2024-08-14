import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

async function getCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character?page=1');
  const data = await res.json();
  return data.results.slice(0, 20);
}

export default async function Home() {
  const characters = await getCharacters();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Rick and Morty Characters</h1>
      <div className={styles.grid}>
        {characters.map((character) => (
          <Link href={`/character/${character.id}`} key={character.id}>
            <div className={styles.card}>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
              />
              <h2>{character.name}</h2>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}