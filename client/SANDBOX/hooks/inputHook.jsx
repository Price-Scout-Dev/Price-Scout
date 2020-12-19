import { useState } from 'react';

const inputHook = (initVal) => {
  
  const [value, setValue] = useState(initVal);

  const handleChange = e => setValue(e.target.value);
  const reset = () => setValue('');

  return [value, handleChange, reset];
}

export default inputHook;