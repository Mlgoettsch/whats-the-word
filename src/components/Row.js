import Box from "./Box";
import './row.css';

const Row = ({ guess }) => {

 return (
    <div className='row'>
      { guess.split('').map(char =>
        <Box letter={char} />
      )}
    </div>

 );
};

export default Row;