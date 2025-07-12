const API_KEY = 'your_api_key_here'; // Replace with your actual API key

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateBtn');
    const output = document.getElementById('output');
    const promptInput = document.getElementById('prompt');

    button.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            output.textContent = 'Please enter a prompt.';
            return;
        }

        output.textContent = 'Generating...';

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents:[
                        {
                            parts:[
                                {
                                    text: prompt    
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
