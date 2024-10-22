from flask import Flask, render_template, request, redirect, Response, stream_with_context
from mistralai import Mistral

CHAVE_API = '6WuSQhhTjc4qH2RBMONLj28QaEjIK6XJ'  # chave da API (não vazar)

IA_CONFIGS = {
    "modelo": "codestral-latest",  # modelo especializado em codificação
    "instrução": "Você é um analisador de códigos. Analisa e avalia códigos, mas não dá a resposta."  # instrução da IA
}

app = Flask(__name__)  # Início do servidor Flask
client = Mistral(api_key=CHAVE_API)  # Cliente da API Mistral

# Função geradora para retornar a resposta da IA de forma "streaming"
def gen_response(message: str):
    # Stream de respostas com base na mensagem do usuário
    for chunk in client.chat.stream(
        model=IA_CONFIGS['modelo'],
        messages=[
            {'role': 'system', 'content': IA_CONFIGS['instrução']},
            {'role': 'user', 'content': message}
        ]
    ):
        yield chunk.data.choices[0].delta.content or ''  # Garante que o conteúdo não será nulo

# Rota para enviar a mensagem e obter a resposta da IA
@app.route('/sendmessage', methods=['POST'])
def send_message():
    data = request.get_json()  # Recebe os dados JSON do POST
    message = data['message']  # Obtém a mensagem do corpo da requisição

    return Response(stream_with_context(gen_response(message)), mimetype='text/event-stream')  # Retorna a resposta em streaming

# Rota da página de apresentação (index)
@app.get('/')
def index():
    return render_template('index.html')  # Renderiza o template de index

# Rotas de autenticação (login e cadastro)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Lógica de login vai aqui (não deixe os "..." no código real)
        pass
        
    return render_template('login.html')  # Renderiza o template de login

@app.route('/cadastro', methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        # Lógica de cadastro vai aqui (não deixe os "..." no código real)
        pass
    
    return render_template('cadastro.html')  # Renderiza o template de cadastro

# Rota para a página de início (visualização de questões e outras informações)
@app.route('/inicio')
def inicio():
    return render_template('inicio.html')  # Renderiza o template de início

# Inicia o servidor Flask
if __name__ == '__main__':
    app.run(debug=True)  # Ativa o modo de depuração para facilitar o desenvolvimento