import { useState } from 'react';

const useToggleState = (initVal) => {
	const [stateData, updateStateData] = useState(initVal);
	const toggler = () => {
		if (stateData) updateStateData(false);
		else updateStateData(true);
	};

	return [stateData, toggler];
};

export default useToggleState;
