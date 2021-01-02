export default function inputCheck(emailInput, pwInput, confirmPwInput) {
	let error = '';

	if (!emailInput) {
		error = 'Please fill in the email input!';
		return error;
	}

	if (!emailInput.includes('@') || !emailInput.endsWith('.com')) {
		error = 'Invalid email format. Please try again.';
		return error;
	}

	if (pwInput.length < 5) {
		error = 'Password must be at least 5 characters long. Please try again.';
		return error;
	}

	if (confirmPwInput && pwInput !== confirmPwInput) {
		error = 'Passwords entered do not match! Please try again.';
		return error;
	}

	return error;
}
