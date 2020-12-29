export default function inputCheck(emailInput, pwInput, confirmPwInput) {
	let error = '';

	if (!emailInput) {
		error += 'Fill in the email input please!';
		return error;
	}

	if (pwInput.length < 5) {
		error += 'Enter password (must be at least 5 characters long)!';
		return error;
	}

	if (!emailInput.includes('@') || !emailInput.includes('.com')) {
		error += 'Invalid email format. Try again!';
		return error;
	}

	if (confirmPwInput && pwInput !== confirmPwInput) {
		error += 'Passwords entered do not match! Try again.';
		return error;
	}

	return error;
}
