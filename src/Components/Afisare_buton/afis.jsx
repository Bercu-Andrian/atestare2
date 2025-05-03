import { LETTERS } from '../constants/letters';

const Butoane = ({ guessedLetters, gameOver, handleGuess }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      {LETTERS.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || gameOver}
          style={{ margin: '5px', padding: '10px 15px' }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Butoane;