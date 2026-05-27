# Bio Template Clientes

Template reutilizável para criar bio sites profissionais para diferentes clientes alterando apenas o arquivo `config.js`.

O projeto mantém HTML, CSS e JavaScript puros, com foco em visual premium, carregamento leve, responsividade mobile e personalização simples.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

```text
bio-template-clientes/
+-- assets/
|   +-- kaua.jpg
+-- config.js
+-- index.html
+-- script.js
+-- style.css
+-- README.md
```

- `assets/`: pasta para fotos e imagens do cliente.
- `config.js`: arquivo principal de personalização do bio site.
- `index.html`: estrutura base da página.
- `script.js`: renderização dinâmica dos dados configurados.
- `style.css`: estilos visuais, responsividade e aparência premium.

## Como Personalizar

Toda personalização principal deve ser feita no arquivo `config.js`.

### Trocar Foto

1. Adicione a nova imagem do cliente dentro da pasta `assets`.
2. Atualize o caminho da foto no `config.js`:

```js
foto: {
  src: "assets/nome-da-foto.jpg",
  alt: "Nome do cliente em foto profissional",
},
```

Use imagens otimizadas, de preferência em `.jpg`, `.webp` ou `.png`, com boa qualidade e tamanho leve.

### Editar Nome e Descrição

No `config.js`, altere os campos:

```js
nome: "Nome do Cliente",
descricao: "Descrição curta e profissional sobre o cliente.",
```

Mantenha a descrição objetiva para preservar a leitura no mobile.

### Alterar Links Sociais

Edite a lista `linksSociais` no `config.js`:

```js
linksSociais: [
  {
    tipo: "whatsapp",
    nome: "WhatsApp",
    destaque: "Fale comigo",
    url: "https://wa.me/5599999999999",
  },
],
```

Se algum link estiver vazio ou com `"#"`, o card não será exibido na página.

Tipos já preparados visualmente:

- `whatsapp`
- `instagram`
- `linkedin`
- `tiktok`
- `facebook`

### Alterar Serviços

Edite a lista `servicos`:

```js
servicos: [
  {
    titulo: "Serviço",
    descricao: "Descrição curta do serviço oferecido.",
  },
],
```

Se um serviço não for informado corretamente, ele não será renderizado. Isso evita espaços vazios no layout.

### Alterar CTA

Edite o bloco `ctaFinal`:

```js
ctaFinal: {
  texto: "Vamos conversar sobre seu projeto?",
  botao: "Começar agora",
  linkPrincipal: "https://wa.me/5599999999999",
},
```

Use um link válido no botão principal. Caso o link esteja vazio ou com `"#"`, o botão será ocultado.

## Como Testar

A forma mais simples de testar localmente é usando o Live Server no VSCode.

1. Abra a pasta do projeto no VSCode.
2. Instale a extensão `Live Server`, caso ainda não tenha.
3. Clique com o botão direito no arquivo `index.html`.
4. Selecione `Open with Live Server`.
5. Verifique o layout no navegador, especialmente em largura mobile.

Também é recomendado validar o JavaScript após alterações:

```bash
node --check script.js
node --check config.js
```

## Como Publicar

### 1. GitHub

Crie um repositório no GitHub para o bio site do cliente.

### 2. Adicionar Arquivos

```bash
git add .
```

### 3. Criar Commit

```bash
git commit -m "Configura bio site do cliente"
```

### 4. Enviar para o GitHub

```bash
git push
```

### 5. Deploy na Vercel

1. Acesse a Vercel.
2. Importe o repositório do GitHub.
3. Configure como projeto estático.
4. Publique o deploy.
5. Teste o link final em desktop e mobile.

## Regras Importantes

- Evite editar `style.css` sem necessidade.
- Use imagens otimizadas para manter o carregamento rápido.
- Mantenha links sociais válidos.
- Preserve a responsividade mobile.
- Personalize preferencialmente apenas o `config.js`.
- Teste o layout antes de publicar para o cliente.

## Exemplo de Fluxo

```text
Duplicar pasta
-> trocar foto em assets
-> editar config.js
-> testar com Live Server
-> validar JavaScript
-> publicar no GitHub
-> fazer deploy na Vercel
```
