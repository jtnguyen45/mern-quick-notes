import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({setUser}) {
    return (
        <main>
            <h1>Get Started with Quick Notes</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    );
}