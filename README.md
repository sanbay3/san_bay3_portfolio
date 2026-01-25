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

## 🌐 GitHub連携とNetlifyデプロイ

詳細な手順は **[DEPLOY.md](./DEPLOY.md)** を参照してください。

### クイックスタート

1. **Gitリポジトリの初期化とGitHubへのプッシュ**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <あなたのGitHubリポジトリURL>
   git push -u origin main
   ```

2. **Netlifyでデプロイ**
   - [Netlify](https://www.netlify.com/)にログイン
   - 「Add new site」→「Import an existing project」
   - GitHubリポジトリを選択
   - Next.jsプラグインを追加（推奨）
   - 「Deploy site」をクリック

詳細は [DEPLOY.md](./DEPLOY.md) をご覧ください。

## 🛠️ 使用技術

- **Next.js 14**: Reactフレームワーク（App Router使用）
- **TypeScript**: 型安全性のための言語
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク

## 📚 コードの解説

### Next.js App Routerについて

Next.js 14では、`app/`ディレクトリを使用する新しいルーティングシステム（App Router）が採用されています。

- `app/layout.tsx`: 全ページで共通のレイアウト（HTMLの構造など）
- `app/page.tsx`: トップページ（`/`）のコンテンツ
- `app/globals.css`: 全ページで適用されるグローバルスタイル

### TypeScriptについて

TypeScriptは、JavaScriptに型システムを追加した言語です。

- **メリット**: エラーを事前に発見できる、コード補完が効く、コードが理解しやすい
- **型定義**: `interface`や`type`でデータの構造を定義（例：`Project`、`ExperienceItem`）

### Tailwind CSSについて

Tailwind CSSは、ユーティリティクラスを使用してスタイリングするCSSフレームワークです。

- **例**: `text-center`（中央揃え）、`bg-bg-primary`（背景色）、`p-4`（パディング）
- **レスポンシブ**: `md:text-6xl`（中サイズ以上の画面で適用）

## 🔧 トラブルシューティング

### エラーが発生した場合

1. `node_modules`を削除して再インストール
   ```bash
   rm -rf node_modules
   npm install
   ```

2. Next.jsのキャッシュをクリア
   ```bash
   rm -rf .next
   npm run dev
   ```

## 📄 ライセンス

このプロジェクトは個人のポートフォリオサイトです。
