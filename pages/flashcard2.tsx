import Flashcard from "../components/Flashcard";

const flashcards = [
    { id: 1, front: "Front 1", back: "Back 1" },
    { id: 2, front: "Front 2", back: "Back 2" },
    { id: 3, front: "Front 3", back: "Back 3" },
];


export default function Flashcard2() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <Flashcard flashcards={flashcards} />
            </div>
            <div className="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>12 unread messages. Tap to see.</span>
                </div>
            </div>
        </div>
    )
}