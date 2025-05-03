const Cuvinte = ({ word, guessedLetters }) => {
    return (
      <div>
        {word.split('').map((letter, index) => (
          <span key={index} style={{ marginRight: '10px', fontSize: '2rem' }}>
            {guessedLetters.includes(letter) ? letter : '_'}
          </span>
        ))}
      </div>
    );
  };
  
  export default Cuvinte;