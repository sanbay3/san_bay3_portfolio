# さんべいのポートフォリオサイト

Next.js 14 + TypeScript + Tailwind CSSで作成されたポートフォリオサイトです。

## 📁 プロジェクト構成

```
sanbay3_portfolio/
├── app/                    # Next.js App Routerのディレクトリ
│   ├── layout.tsx         # 全ページ共通のレイアウト
│   ├── page.tsx           # トップページ（メインページ）
│   └── globals.css        # グローバルスタイル
├── components/             # Reactコンポーネント
│   ├── Hero.tsx           # Heroセクション（トップの見出し）
│   ├── About.tsx          # Aboutセクション（自己紹介）
│   ├── Skills.tsx         # Skillsセクション（スキル）
│   ├── Projects.tsx       # Projectsセクション（プロジェクト）
│   ├── Experience.tsx     # Experienceセクション（経歴）
│   └── Contact.tsx        # Contactセクション（連絡先）
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # TypeScript設定
├── tailwind.config.ts     # Tailwind CSS設定
└── next.config.js         # Next.js設定
```

## 🚀 セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、サイトが表示されます。

### 3. ビルド（本番環境用）

```bash
npm run build
```

### 4. 本番サーバーの起動（ビルド後）

```bash
npm start
```

## 📝 カスタマイズ方法

### コンテンツの編集

各セクションのコンテンツは、`components/`ディレクトリ内の各ファイルで編集できます。

- **Heroセクション**: `components/Hero.tsx`
  - 名前や自己紹介文を変更

- **Aboutセクション**: `components/About.tsx`
  - 詳細な自己紹介を追加

- **Skillsセクション**: `components/Skills.tsx`
  - `skills`配列にスキルを追加

- **Projectsセクション**: `components/Projects.tsx`
  - `projects`配列にプロジェクトを追加
  - タイトル、説明、リンクを設定

- **Experienceセクション**: `components/Experience.tsx`
  - `experiences`配列に経歴を追加

- **Contactセクション**: `components/Contact.tsx`
  - `socialLinks`配列にSNSリンクを追加

### スタイルの変更

- **カラー**: `tailwind.config.ts`の`colors`セクションで変更可能
- **レイアウト**: 各コンポーネントのTailwind CSSクラスを編集

## 🛠️ 使用技術

- **Next.js 14**: Reactフレームワーク（App Router使用）
- **TypeScript**: 型安全性のための言語
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク

## 📄 ライセンス

このプロジェクトは個人のポートフォリオサイトです。
