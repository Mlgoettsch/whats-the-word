import './box.css';

const Box = ({ letter }) => {
  return (
    <div className='box'>
      { letter }
    </div>
  );
};

export default Box;