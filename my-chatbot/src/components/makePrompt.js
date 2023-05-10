export default function makePrompt(userMessage) {
    let prompt = { role: 'user', content: '' };
    prompt.content = userMessage;
    return prompt;
}