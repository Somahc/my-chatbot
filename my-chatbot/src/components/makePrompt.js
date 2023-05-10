export default function makePrompt(role, userMessage) {
    let prompt = { role: '', content: '' };
    prompt.role = role;
    prompt.content = userMessage;
    return prompt;
}