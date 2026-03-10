import http.server
import socketserver
import os

PORT = 5000
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), 'public')

class StaticHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

# Permitir reiniciar el servidor sin el error "Address already in use"
socketserver.TCPServer.allow_reuse_address = True

try:
    with socketserver.TCPServer(("", PORT), StaticHandler) as httpd:
        print(f"Servidor Python activo en http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nApagando servidor...")