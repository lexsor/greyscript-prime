const vscode = require('vscode');
let DOCS = Object.create(null);

function parseDocblocks(text) {
  // Collect contiguous `// ...` lines above `name = function(...)`
  // Then map `name` -> Markdown
  const lines = text.split(/\r?\n/);
  const docs = {};
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*([A-Za-z_]\w*)\s*=\s*function\s*\(/);
    if (!m) continue;
    const name = m[1];
    // walk up to gather `//` lines
    let j = i - 1, buf = [];
    while (j >= 0) {
      const mm = lines[j].match(/^\s*\/\/\s?(.*)$/);
      if (!mm) break;
      buf.unshift(mm[1]);
      j--;
    }
    if (!buf.length) continue;

    // turn @tags into Markdown (simple)
    const summary = [];
    const params = [];
    let returns = null;
    const example = [];

    for (const l of buf) {
      if (l.startsWith('@param')) params.push(l.replace(/^@param\s+/, ''));
      else if (/^@returns?/.test(l)) returns = l.replace(/^@returns?\s+/, '');
      else if (l.startsWith('@example')) example.push(l.replace(/^@example\s?/, ''));
      else if (!l.startsWith('@description ---')) summary.push(l.replace(/^@description\s*/, ''));
    }

    let md = `### ${name}()\n`;
    if (summary.length) md += summary.join(' ') + '\n\n';
    if (params.length) {
      md += '**Params**\n';
      for (const p of params) md += `- ${p}\n`;
      md += '\n';
    }
    if (returns) md += `**Returns** ${returns}\n\n`;
    if (example.length) {
      md += '**Example**\n```greyscript\n' + example.join('\n') + '\n```\n';
    }
    docs[name] = md.trim();
  }
  return docs;
}

async function buildIndex(context) {
  DOCS = Object.create(null);
  const globs = vscode.workspace.getConfiguration().get('greyscriptPrime.hover.scanGlobs', []);
  for (const g of globs) {
    const uris = await vscode.workspace.findFiles(g);
    for (const uri of uris) {
      const buf = await vscode.workspace.fs.readFile(uri);
      const txt = new TextDecoder('utf-8').decode(buf);
      Object.assign(DOCS, parseDocblocks(txt));
    }
  }
}

function activate(context) {
  buildIndex(context); // fire and forget; you can also await
  context.subscriptions.push(
    vscode.languages.registerHoverProvider({ language: 'greyscript' }, {
      provideHover(doc, pos) {
        const range = doc.getWordRangeAtPosition(pos, /[A-Za-z_]\w*/);
        if (!range) return null;
        const name = doc.getText(range);
        const md = DOCS[name];
        if (!md) return null;
        return new vscode.Hover(new vscode.MarkdownString(md), range);
      }
    })
  );
}
exports.activate = activate;
