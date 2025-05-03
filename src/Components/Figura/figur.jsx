import { STAGES } from '../constants/stages';

const Figura = ({ wrongGuesses }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Greșeli: {wrongGuesses} / {STAGES.length - 1}</p>
      <p>Stadiu: {STAGES[wrongGuesses]}</p>
    </div>
  );
};

export default Figura;