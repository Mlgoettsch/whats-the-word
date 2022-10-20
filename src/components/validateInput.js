export const validateInput = (guess) => {
  const errors = {};

  if (!guess) {
    errors.guess='Take a guess!'
  } else if (guess.length < 5) {
    errors.author='Must be at least 5 characters.'
  }

  
  return errors
  
};