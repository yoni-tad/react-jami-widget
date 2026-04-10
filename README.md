# react-jami-widget

![npm version](https://img.shields.io/npm/v/react-jami-widget)
![license](https://img.shields.io/npm/l/react-jami-widget)
![typescript](https://img.shields.io/badge/TypeScript-ready-blue)

Add the Jami tipping widget to your React or Next.js app.

## ✨ Features

* ⚛️ React-friendly
* 🎨 Easy customization
* 🧠 TypeScript support

---

## 📦 Install

```bash
pnpm add react-jami-widget
```

or

```bash
npm install react-jami-widget
```

---

## 🚀 Usage

```tsx
"use client";

import { JamiWidget } from "react-jami-widget";

export default function Page() {
  return (
    <JamiWidget
      id="yoni-tad"
      color="#9333ea"
      text="Leave Tip"
      emoji="☕"
      position="right"
    />
  );
}
```

---

## ⚙️ Props

| Prop     | Type             | Required | Description            |
| -------- | ---------------- | -------- | ---------------------- |
| id       | string           | ✅        | Your jami.bio username |
| color    | string           | ❌        | Button color           |
| text     | string           | ❌        | Button text            |
| emoji    | string           | ❌        | Emoji icon             |
| position | "left" | "right" | ❌        | Widget position        |

---

## ⚠️ Next.js Notes

* Add `"use client"` at the top of your component
* Widget runs only on client side

---

## 🧠 How it works

This package wraps the official Jami widget script and injects it safely into React apps.

---

## 📄 License

MIT
