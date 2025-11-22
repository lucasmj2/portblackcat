# 🚀 Guia de Deploy - portblackcat.vercel.app

## ✅ Pré-requisitos

1. **Conta no GitHub** (grátis)
   - Acesse: https://github.com/signup
   - Crie sua conta se ainda não tiver

2. **Conta na Vercel** (grátis)
   - Acesse: https://vercel.com/signup
   - Faça login com sua conta do GitHub

## 📦 Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `portblackcat`
3. Deixe como **Público**
4. **NÃO** marque "Add a README file"
5. Clique em **"Create repository"**

## 💻 Passo 2: Subir o Código para o GitHub

Abra o terminal no VS Code e execute:

```bash
# Inicializar Git (se ainda não foi)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - portblackcat"

# Adicionar o repositório remoto (SUBSTITUA SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/portblackcat.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

## 🌐 Passo 3: Deploy na Vercel

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Selecione o repositório **portblackcat**
4. Configure:
   - **Project Name**: portblackcat
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Clique em **"Deploy"**

## ⏱️ Aguarde o Deploy (2-3 minutos)

A Vercel vai:
- Instalar dependências
- Compilar o projeto
- Publicar o site

## 🎉 Pronto!

Seu site estará disponível em:
- **https://portblackcat.vercel.app**

## 🔄 Atualizações Futuras

Sempre que você fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

A Vercel vai fazer o deploy automático! ✨

## 🆘 Problemas?

- Verifique se todas as imagens estão na pasta `public/`
- Certifique-se que não há erros no console
- Teste localmente com `npm run build` antes de fazer push

---

**Seu portfólio Web3 estará no ar em minutos! 🚀**
