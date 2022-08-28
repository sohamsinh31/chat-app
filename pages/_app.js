import '../styles/globals.css'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth, db } from '../firebase'
import login  from './Login';

function MyApp({ Component, pageProps }) {
  const [ user,loading ] = useAuthState(auth);

  if(loading) return <loading />;
  if(!user) return <login />;
  return <Component {...pageProps} />;
}

export default MyApp
