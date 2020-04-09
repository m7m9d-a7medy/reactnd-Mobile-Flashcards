import { generateId } from "./helpers";

export default {
    React: {
        title: 'React',
        id: generateId(),
        questions: [
            {
                id: generateId(),
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                correct: true
            },
            {
                id: generateId(),
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                correct: true
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        id: generateId(),
        questions: [
            {
                id: generateId(),
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                correct: true
            }
        ]
    }
}