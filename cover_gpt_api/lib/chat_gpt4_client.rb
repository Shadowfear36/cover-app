require 'openai'
class ChatGpt4Client
    
    def initialize
        @client = OpenAI::Client.new(api_key: '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')
    end

    def generate_text(prompt, length)
        @client.completions(
            engine: 'text-davinci-002',
            prompt: prompt,
            max_tokens: length
        )['choices'][0]['text']
    end
end