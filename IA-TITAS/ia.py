import google.generativeai as genai

genai.configure(api_key="AIzaSyDKATVChts5s3QqZsKbsfFOn2574stkfog")

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash", # o gemini-1.5-pro é mais lento
    system_instruction="Você é um execelente avaliador de códigos python."
)

historico = []
chat_session = model.start_chat(history=historico)

# essa merda de função gera uma resposta da IA
def genResponse(prompt:str):
    historico.append({"role": "user", "parts": prompt}) # add no histórico, a pergunta/código do usuário
    
    response = chat_session.send_message(prompt)

    historico.append({"role": "model", "parts": response}) # add no histórico, a resposta da IA
    return response.text

def rate_code(originalCode:str, idealResult:str, printar:bool=False):
    prompt = f"Avalie este código de 0 à 10 onde o resultado tem que ser igual a: {idealResult}. Aqui está o código: {originalCode}"

    response = genResponse(prompt)

    if printar:
        for c in response:
            print(c, end='', flush=True)

    return response

rate_code("printa('olá mundo!')", "Olá mundo!")
