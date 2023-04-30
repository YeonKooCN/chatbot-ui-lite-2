import { FlashcardArray } from "react-quizlet-flashcard";

export default function FlashcardPage() {
    const cards = [
        {
          id: 1,
          frontHTML: "Hello",
          backHTML: "<h1>World<h1>",
          frontCardStyle: { backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"},
          backCardStyle: { backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center" },
        },
        {
          id: 2,
          frontHTML: "Hello2",
          backHTML: "World2",
          frontCardStyle: { backgroundColor: "#ffffff" },
          backCardStyle: { backgroundColor: "#ffffff" },
        },
    ]
      return (
        <div>
          <FlashcardArray cards={cards} />
        </div>
      );
}