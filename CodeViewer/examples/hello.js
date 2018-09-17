function codeViewerCallback() {
  return {
    html: '<h1>Hello <span id="container"></span>!</h1>',
    css: 'body{ background: deepSkyBlue; }',
    js: 'document.getElementById("container").innerHTML = "CodeViewer"',
  }
}