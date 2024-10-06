import google.generativeai as genai
import re

# Configuração da API do modelo generativo
genai.configure(api_key="AIzaSyDKATVChts5s3QqZsKbsfFOn2574stkfog")

# Instanciação do modelo generativo
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",  # O gemini-1.5-pro é mais lento
    system_instruction="Você é um excelente avaliador de códigos Python."
)

# Histórico de conversas
historico = []
chat_session = model.start_chat(history=historico)

def genResponse(prompt: str) -> str:
    # Adiciona a pergunta/código do usuário ao histórico
    historico.append({"role": "user", "parts": [prompt]})
    
    # Envia a mensagem e obtém a resposta
    response = chat_session.send_message(prompt)
    
    # Adiciona a resposta da IA ao histórico
    historico.append({"role": "model", "parts": [response.text]})
    
    return response.text

def clean_markdown(text: str) -> str:
    """Remove markdown e quebras de linha para retornar texto limpo."""
    return re.sub(r'(\*\*|```|\\n)', '', text).strip()

def rate_code(originalCode: str, idealResult: str) -> dict:
    prompt = (
        f"Avalie este código de 0 a 10, onde o resultado deve ser igual a: {idealResult}. "
        f"Aqui está o código: {originalCode}. "
        "Você deve responder no seguinte formato: Nota: e Sugestões: "
        "Forneça as sugestões em até 20 palavras."
    )

    response = genResponse(prompt)

    # Inicializando as variáveis
    nota = None
    sugestoes = None

    # Extraindo a nota e as sugestões da resposta
    if "Nota:" in response and "Sugestões:" in response:
        parts = response.split("Sugestões:")
        nota_part = parts[0].strip()
        sugestoes_part = parts[1].strip()

        if "Nota:" in nota_part:
            nota = clean_markdown(nota_part.split("Nota:")[1].strip())

        sugestoes = clean_markdown(sugestoes_part)

    return {'nota': nota, 'sugestoes': sugestoes}

# Exemplo de uso
# resultado = rate_code("print('olá mundo!')", "Olá mundo!")
# print(resultado)
