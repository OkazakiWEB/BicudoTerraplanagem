# Guia de Deploy — Bicudo Terraplanagem

## Estrutura de Arquivos

```
BicudoTerraplanagem/
├── index.html          ← Landing page principal
├── css/
│   └── style.css       ← Estilos customizados
├── js/
│   └── main.js         ← JavaScript (animações, form, WA)
└── assets/             ← Imagens próprias (substitua os placeholders)
```

---

## ⚠️ ANTES DE PUBLICAR — Checklist

1. [ ] Substituir `5511999999999` pelo número real no arquivo `js/main.js` (linha 7)
2. [ ] Substituir `(11) 99999-9999` pelo telefone real no `index.html`
3. [ ] Substituir e-mail `contato@bicudoterraplanagem.com.br` pelo e-mail real
4. [ ] Adicionar imagens reais dos seus equipamentos e obras na pasta `assets/`
5. [ ] Atualizar os depoimentos com nomes e empresas reais

---

## 1. GitHub — Criar e subir o repositório

### Passo 1: Instalar Git
Baixe em: https://git-scm.com/download/win

### Passo 2: Criar repositório no GitHub
1. Acesse https://github.com e faça login
2. Clique em "New repository"
3. Nome: `bicudo-terraplanagem`
4. Deixe como **Public**
5. Clique em "Create repository"

### Passo 3: Subir os arquivos via terminal

Abra o terminal na pasta do projeto e execute:

```bash
git init
git add .
git commit -m "feat: landing page Bicudo Terraplanagem"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/bicudo-terraplanagem.git
git push -u origin main
```

---

## 2. Vercel — Deploy gratuito

### Passo 1: Criar conta
Acesse https://vercel.com e faça login com sua conta GitHub.

### Passo 2: Importar projeto
1. Clique em **"Add New → Project"**
2. Selecione o repositório `bicudo-terraplanagem`
3. Clique em **"Deploy"**

O Vercel detecta automaticamente que é um site estático (HTML puro).

### Passo 3: Aguardar o deploy
Em ~30 segundos o site estará online em:
`https://bicudo-terraplanagem.vercel.app`

### Passo 4: Deploy automático
A partir de agora, qualquer `git push` faz o site atualizar automaticamente.

---

## 3. Domínio Personalizado na Vercel

### Passo 1: Adicionar domínio
1. No painel da Vercel, vá em **Settings → Domains**
2. Clique em **"Add Domain"**
3. Digite: `bicudoterraplanagem.com.br`
4. Clique em **Add**

A Vercel vai mostrar os registros DNS que precisam ser configurados.

---

## 4. Configurar DNS no Registro.br

### Passo 1: Acessar o Registro.br
1. Acesse https://registro.br
2. Faça login e vá em **"Meus Domínios"**
3. Clique no domínio `bicudoterraplanagem.com.br`
4. Clique em **"Editar zona DNS"**

### Passo 2: Configurar registros A e CNAME

Adicione os seguintes registros (valores exatos que a Vercel fornecer):

| Tipo  | Nome | Valor                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 76.76.21.21              | 3600 |
| CNAME | www  | cname.vercel-dns.com.    | 3600 |

> ⚠️ Confirme os IPs na aba Domains da Vercel — podem variar.

### Passo 3: Aguardar propagação
- A propagação DNS leva de **5 minutos a 48 horas**
- Você pode acompanhar em: https://dnschecker.org

### Passo 4: SSL automático
A Vercel gera o certificado SSL (HTTPS) automaticamente via Let's Encrypt.
Aguarde até 24h após a propagação do DNS.

---

## 5. Verificar funcionamento

Após a propagação, teste:

- [ ] `https://bicudoterraplanagem.com.br` abre o site
- [ ] `https://www.bicudoterraplanagem.com.br` redireciona corretamente
- [ ] Cadeado verde (HTTPS) aparece no navegador
- [ ] Botão WhatsApp abre o número correto
- [ ] Formulário funciona e abre o WhatsApp com a mensagem
- [ ] Site funciona corretamente no celular

---

## 6. Google Analytics (recomendado)

1. Acesse https://analytics.google.com
2. Crie uma propriedade para `bicudoterraplanagem.com.br`
3. Copie o código `G-XXXXXXXXXX`
4. Adicione antes do `</head>` no `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 7. Google Search Console (SEO)

1. Acesse https://search.google.com/search-console
2. Adicione a propriedade com o domínio
3. Faça a verificação pelo método de metatag HTML
4. Envie o sitemap (criar um `sitemap.xml` simples)

---

## Sugestões de Melhorias Futuras

- **Google Meu Negócio**: Cadastre a empresa para aparecer nas buscas locais
- **Pixel do Facebook/Meta Ads**: Para campanhas de remarketing
- **Pixel do WhatsApp Business**: Para rastrear conversões
- **Formulário com backend**: Integrar com EmailJS ou Formspree para receber os leads por email também
- **Blog/Conteúdo**: Artigos sobre terraplanagem para SEO orgânico
- **Chat ao vivo**: Integrar JivoChat ou Tawk.to para atendimento em tempo real
- **Portfólio com antes/depois**: Slider de fotos reais das obras

---

*Deploy configurado com Vercel (free tier) + Registro.br DNS*
