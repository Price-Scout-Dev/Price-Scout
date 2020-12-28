import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		paddingTop: '15rem',
		// background: 'linear-gradient(to right, #FFFFFF, #E0E0E0)',
		background: 'linear-gradient(to right, #FFFFFF, #B2FEFA)',
	},
	loginBox: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		textAlign: 'center',
	},
	googleLetters: {
		fontWeight: 'bold',
		fontSize: '1.1rem',
	},
	loginPaper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '3rem 1.5rem',
		borderRadius: '2rem',
		[theme.breakpoints.down(913)]: {
			marginTop: '2rem',
		},
	},
	loginForm: {
		display: 'flex',
		flexDirection: 'column',
	},
	loginTextField: {
		marginBottom: '0.5rem',
		width: '25rem',
	},
	loginBtn: {
		width: '25rem',
		borderRadius: '1rem',
	},
	loginDivider: {
		width: '20rem',
		margin: '1.5rem 0',
	},
	loginCreateAccountBtn: {
		background: '#42B72A',
		color: 'white',
		'&:hover': {
			background: '#359222',
		},
	},
	registerForm: {
		padding: '1.5rem 3rem 3rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	registerDivider: {
		width: '5rem',
		margin: '0.3rem 0 1.5rem',
	},
	registerBtn: {
		background: 'linear-gradient(to bottom right, #F12711, #F5AF19)',
		color: 'white',
		'&:hover': {
			background: 'linear-gradient(to bottom right, #D9230F, #DB9D16)',
		},
		marginTop: '1rem',
		borderRadius: '2rem',
		width: '50%',
		alignSelf: 'center',
	},
}));

export default useStyles;
