import Image from 'next/image';
import Link from 'next/link';
import styles from '../../page.module.css';

async function getCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
}

export default async function CharacterPage({ params }) {
  const character = await getCharacter(params.id);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        &larr; Back to Characters
      </Link>
      <div className={styles.characterDetail}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
        />
        <div className={styles.characterInfo}>
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}