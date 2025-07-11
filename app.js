const API_KEY = 'your_api_key_here'; // Replace with your actual API key

Document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElemenntById('generateBtn');
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
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        
                    }
                }
            )
        }