import { useState } from 'react';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);
    
    return (
        <h1>My Notes</h1>
    );
}