export const generateId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const newDeck = title => ({
    title: title,
    id: generateId(),
    questions: []
})

export const newEntry = (question, answer) => ({
    id: generateId(),
    question,
    answer,
})