import SignInCard from "./authcards/SignInCard"
import styles from '../../../public/styles/signin.module.css';

export default function SignIn() {
    return (
        <div className={styles.signin_container}>
            <SignInCard />
        </div>
    )
}