# 1) Prerequisites

- Node.js + npm installed
- VS Code installed
### Packaging CLIs:
```bash
npm i -g @vscode/vsce           # official VS Code Marketplace
npm i -g ovsx                   # (optional) Open VSX / VSCodium
```

# 2) Finalize your project

### Your repo should look roughly like:
```pgsql
greyscript-prime/
  package.json
  README.md
  CHANGELOG.md
  LICENSE
  images/GreyScriptPrime.png
  snippets/
    strings_define.json
    strings_call.json
    lists_define.json
    lists_call.json
    maps_define.json
    maps_call.json
    numbers_define.json
    numbers_call.json
    construct_define.json
    construct_call.json
    enum_define.json
    enum_call.json
  .vscode/ (optional workspace settings)
  .vscodeignore
```

### package.json — double-check these

You’ve already got most of this; just confirm:

- "name" (all lowercase, unique), "displayName", "publisher": "Svarii" (must match your publisher account)
- "version" uses semver (e.g., 0.0.2)
- "engines.vscode" (you set ^1.85.0)
- "categories": ["Programming Languages","Snippets"]
- "icon", "repository", "bugs", "homepage"
- "contributes.snippets" entries for every JSON you want to ship
- Optional but recommended if you want users to also get the GreyScript language features automatically:
```json
"extensionDependencies": ["ayecue.greybel-vs"]
```
- Optional activation hint (snippets load regardless, but this can be nice):
```json
"activationEvents": ["onLanguage:greyscript"]
```
### .vscodeignore — keep the VSIX small

Create a .vscodeignore to exclude local dev/test assets:
```plaintext
.vscode/**
.git/**
**/*.src
**/*.gs
test_*.* 
*.log
**/__tests__/**
node_modules/**
```
(If you want to ship examples, remove the `*.src`/`*.gs` lines.)


# 3) Try it locally (Extension Development Host)

From the extension folder:
- Open in VS Code → Run and Debug → Run Extension (or press F5).
- This launches a second VS Code window (Extension Development Host).
- Open a `.gs` / `.src` file and confirm your snippets appear.

# 4) Package a VSIX
### -> greyscript-prime-0.0.1.vsix (or your version)
From the repo root: 
```bash
vsce package
```
###Install the VSIX locally to test the real install flow:
```bash
code --install-extension greyscript-prime-0.0.1.vsix
```

# 5) Publish to marketplaces (optional)
## VS Code Marketplace

### 1. Create a Publisher (one-time):
```bash
vsce create-publisher Svarii
```
### 2. Create an Azure DevOps PAT (scope: Marketplace > Manage), then:
paste PAT when prompted
```bash
vsce login Svarii     
```
### 3. Publish (bumps must be in package.json):
uses your current "version" or: vsce publish patch | minor | major
```bash
vsce publish          
```
## Open VSX (VSCodium / Eclipse Theia)
create a namespace once on Open VSX (web), then:
```bash
ovsx publish -p $OVSX_PAT
```
# 6) Versioning workflow you’ll like
```bash
npm version patch     # updates package.json version + git tag
git push --follow-tags
vsce publish          # or ovsx publish
```
# 7) Release checklist

✅ Snippets expand correctly (you tested with the per-category test_*.src/.gs)
✅ README: what’s included, how to trigger snippets, screenshots/GIF
✅ CHANGELOG: highlights of the release
✅ LICENSE: MIT (you said you’re using MIT)
✅ Icon renders (PNG recommended at ~256×256)
✅ .vscodeignore excludes large test files