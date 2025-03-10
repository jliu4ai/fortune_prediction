from flask import Flask, request, jsonify
import openai
import os
from flask_cors import CORS
from OpenSSL import SSL  # 需要先安装 pyOpenSSL

app = Flask(__name__)
CORS(app)

# ... 其他代码保持不变 ...

if __name__ == '__main__':
    context = ('cert.pem', 'key.pem')  # SSL证书文件
    app.run(host='0.0.0.0', port=5500, ssl_context=context) 