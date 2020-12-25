import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		paddingTop: '15rem',
		background: 'linear-gradient(to bottom right, #FFFFFF, #E0E0E0)',
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
		margin: '1.5rem 0rem',
	},
	loginCreateAccountBtn: {
		background: '#42B72A',
		color: 'white',
		'&:hover': {
			background: '#359222',
			transition: '250ms',
		},
	},
}));

export default useStyles;
