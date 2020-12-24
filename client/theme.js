import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		paddingTop: '65px' /* account for sticky nav bar */,
		background: '#ECE9E6' /* fallback for old browsers */,
		background:
			'-webkit-linear-gradient(to right, #FFFFFF, #ECE9E6)' /* Chrome 10-25, Safari 5.1-6 */,
		background:
			'linear-gradient(to right, #FFFFFF, #ECE9E6)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
		padding: '3rem 1rem',
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
