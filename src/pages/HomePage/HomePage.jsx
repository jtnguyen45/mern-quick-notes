import { checkToken } from '../../utilities/users-service';
import './HomePage.css';

export default function HomePage() {
    async function handleCheckToken(evt) {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1>Welcome to Quick Notes!</h1>
            <div className='home-container'>
                <img src="https://static.vecteezy.com/system/resources/previews/005/243/729/original/cute-student-characters-are-taking-notes-in-a-notebook-a-note-with-stickers-and-notes-free-vector.jpg" alt="" />
                <p>Your one-stop destination for note taking!</p>
            </div>
        </>
    );
}