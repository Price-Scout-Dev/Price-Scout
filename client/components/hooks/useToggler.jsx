import { useState } from 'react';

const useToggler = (initVal) => {
	const [stateData, updateStateData] = useState(initVal);
	const toggler = () => updateStateData(!stateData);

	return [stateData, toggler];
};

export default useToggler;
