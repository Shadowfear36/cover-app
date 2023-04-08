class ApplicationController < ActionController::API

    def generate_text
        client = ChatGpt4Client.new
        @text = client.generate_text(params[:prompt], params[:length])
        render json: { text: @text }
    end

end
