# 🥗 Plano Alimentar — Guilherme Pereira Alves

Aplicativo mobile-first para acompanhar o plano alimentar personalizado elaborado pela **Nutricionista Adla Torres** na Unimed Ceará.

## ✨ Funcionalidades

| Aba | Descrição |
|-----|-----------|
| 🏠 **Hoje** | Visão geral do dia com progresso de refeições, lembretes de água e pré-treino |
| 🍽️ **Refeições** | Todas as refeições do plano com múltiplas opções por refeição e lista de ingredientes |
| 📖 **Receitas** | Receitas saudáveis com modo de preparo completo, busca por nome |
| 🛒 **Compras** | Lista de compras por categoria com checkboxes e opção de compartilhar |
| 💡 **Dicas** | Dicas de hidratação, chás funcionais, pré-treino e bem-estar |

## 🛠️ Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS v4**
- **Lucide React** (ícones)
- `localStorage` para persistência de estado entre sessões

## 🚀 Rodando localmente

```bash
cd app
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## 📦 Build para produção

```bash
cd app
npm run build
```

## 🌐 Deploy

O app é hospedado no **Vercel** com deploy automático a cada `git push`.

> Configuração no Vercel: **Root Directory = `app/`**

---

*Plano elaborado em março de 2026 · Nutricionista Adla Torres — Unimed Ceará*
