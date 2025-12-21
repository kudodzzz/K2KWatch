'''

- Website : https://watch.kdz.ct.ws
- GitHub : https://github.com/kudodzzz/K2KWatch
(c) 2025 Copyright by Kudodzzz

'''

from flask import Flask, send_file, abort
import os

BASE_DIR = os.path.abspath(".")

app = Flask(
    __name__,
    static_folder="assets",
    static_url_path="/assets"
)


def resolve_html(path):
    path = path.strip("/")

    if path == "":
        return os.path.join(BASE_DIR, "index.html")

    full_path = os.path.join(BASE_DIR, path)

    if os.path.isdir(full_path):
        index_file = os.path.join(full_path, "index.html")
        if os.path.isfile(index_file):
            return index_file

    if full_path.endswith(".html") and os.path.isfile(full_path):
        return full_path

    html_path = full_path + ".html"
    if os.path.isfile(html_path):
        return html_path

    return None


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_html(path):
    file_path = resolve_html(path)
    if file_path:
        return send_file(file_path)
    abort(404)


@app.route("/404")
def show_404():
    page_404 = os.path.join(BASE_DIR, "404.html")
    if os.path.isfile(page_404):
        return send_file(page_404), 404
    return "404 Not Found", 404


@app.route("/favicon.png")
def favicon():
    favicon_path = os.path.join(BASE_DIR, "favicon.png")
    if os.path.isfile(favicon_path):
        return send_file(favicon_path, mimetype="image/png")
    abort(404)


@app.errorhandler(404)
def page_not_found(e):
    page_404 = os.path.join(BASE_DIR, "404.html")
    if os.path.isfile(page_404):
        return send_file(page_404), 404
    return "404 Not Found", 404


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True
    )
