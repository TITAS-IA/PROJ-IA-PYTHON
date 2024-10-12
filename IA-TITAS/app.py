from flask import Flask, request, jsonify, render_template
from TestIA import rate_code
import sys
import io
from contextlib import redirect_stdout, redirect_stderr

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/facil')
def medio():
    return render_template('easy.html')

@app.route('/medio')
def facil():
    return render_template('medium.html')

@app.route('/dificil')
def dificil():
    return render_template('hard.html')

@app.route('/run', methods=['POST'])
def run_code():
    code = request.form['code']
    output = io.StringIO()
    error_message = None

    with redirect_stdout(output), redirect_stderr(output):
        try:
            exec(code)
        except Exception as e:
            error_message = str(e)

    # Se ocorrer um erro, inclui o erro na resposta da IA
    if error_message:
        response = rate_code(code, "Olá mundo")
    else:
        response = rate_code(code, "Olá mundo!")

    return jsonify(
        {
            'output': output.getvalue() if not error_message else error_message,
            'ia_response': {
                'nota': response['nota'],
                'sugestao': response['sugestoes']
            }
        }
    )

if __name__ == '__main__':
    app.run(debug=True)
