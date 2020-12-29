export default function inputCheck(emailInput, pwInput) {
	if (!emailInput) return alert('Fill in the email input please!');
	else if (pwInput.length < 5)
		return alert('Enter password (must be at least 5 characters long)!');
	else if (!emailInput.includes('@') || !emailInput.includes('.com'))
		return alert('Invalid email format. Try again!');
}
