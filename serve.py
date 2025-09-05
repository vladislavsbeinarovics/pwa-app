from http.server import SimpleHTTPRequestHandler, HTTPServer

class UTF8Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Content-Type", "text/html; charset=utf-8")
        super().end_headers()

PORT = 8080
server_address = ("", PORT)
httpd = HTTPServer(server_address, UTF8Handler)
print(f"Serving at http://localhost:{PORT}")
httpd.serve_forever()