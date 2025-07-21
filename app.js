const API_KEY = ''; // Replace with API key

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateBtn');
    const output = document.getElementById('output');
    const promptInput = document.getElementById('prompt');

    button.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        const fullPrompt = `You are a fact-checking assistant. Analyze the following text for:
1. Factual accuracy
2. Political or emotional bias
3. Emotional tone

Provide clear and concise results under each category. And keep the reponse under 200 words.

Text to analyze:"${prompt}"
`;
        if (!prompt) {
            output.textContent = 'Please enter a prompt.';
            return;
        }

        output.textContent = 'Generating...';

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents:[
                        {
                            parts:[
                                {
                                    text: fullPrompt    
                                }
                            ]
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            output.textContent = data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Error:', error);
            output.textContent = 'An error occurred while generating the response.';
        }
    });
}); 
