# GitHub連携とNetlifyリリース手順

このドキュメントでは、ポートフォリオサイトをGitHubにプッシュし、Netlifyでデプロイする手順を説明します。

## 📋 前提条件

- GitHubアカウントを持っていること
- Netlifyアカウントを持っていること（まだの場合は後で作成します）

---

## ステップ1: Gitリポジトリの初期化

### 1-1. Gitリポジトリを初期化

```bash
git init
```

### 1-2. すべてのファイルをステージング

```bash
git add .
```

### 1-3. 初回コミット

```bash
git commit -m "Initial commit: Portfolio site with Next.js"
```

---

## ステップ2: GitHubリポジトリの作成

### 2-1. GitHubでリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」ボタン → 「New repository」をクリック
3. リポジトリ名を入力（例：`sanbay3-portfolio`）
4. **Public**または**Private**を選択（ポートフォリオはPublicが一般的）
5. **「Initialize this repository with a README」のチェックは外す**（既にREADMEがあるため）
6. 「Create repository」をクリック

### 2-2. ローカルリポジトリとGitHubを接続

GitHubでリポジトリを作成すると、以下のようなコマンドが表示されます。
**あなたのリポジトリURL**に置き換えて実行してください。

```bash
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
```

例：
```bash
git remote add origin https://github.com/sanbay3/sanbay3-portfolio.git
```

### 2-3. メインブランチを設定

```bash
git branch -M main
```

### 2-4. GitHubにプッシュ

```bash
git push -u origin main
```

初回はGitHubの認証情報を求められる場合があります。

---

## ステップ3: Netlifyアカウントの作成（まだの場合）

1. [Netlify](https://www.netlify.com/)にアクセス
2. 「Sign up」をクリック
3. 「GitHub」を選択してGitHubアカウントでログイン（推奨）

---

## ステップ4: Netlifyでデプロイ

### 4-1. 新しいサイトを追加

1. Netlifyのダッシュボードにログイン
2. 「Add new site」→「Import an existing project」をクリック
3. 「GitHub」を選択
4. 必要に応じてGitHubの認証を許可
5. 作成したリポジトリ（例：`sanbay3-portfolio`）を選択

### 4-2. ビルド設定

Netlifyが自動的に設定を検出しますが、確認してください：

- **Build command**: `npm run build`
- **Publish directory**: `.next`

**重要**: Next.jsプラグインを使用する場合

Netlifyのダッシュボードで：
1. 「Add build plugin」をクリック
2. 「Next.js」プラグインを検索して追加

これにより、Next.jsに最適化されたビルド設定が自動適用されます。

### 4-3. デプロイの実行

1. 「Deploy site」をクリック
2. ビルドが完了するまで待機（通常1-3分）
3. デプロイが完了すると、自動的にURLが生成されます
   - 例：`https://random-name-123.netlify.app`

### 4-4. カスタムドメインの設定（オプション）

1. Netlifyのダッシュボードでサイトを選択
2. 「Domain settings」をクリック
3. 「Add custom domain」をクリック
4. ドメイン名を入力して設定

---

## ステップ5: 今後の更新方法

コードを更新したら、以下のコマンドでGitHubにプッシュすると、Netlifyが自動的に再デプロイします。

```bash
# 変更をステージング
git add .

# コミット
git commit -m "更新内容の説明"

# GitHubにプッシュ
git push
```

Netlifyが自動的に変更を検出し、再デプロイが開始されます。

---

## 🔧 トラブルシューティング

### ビルドエラーが発生する場合

1. Netlifyのダッシュボードで「Deploys」タブを確認
2. エラーログを確認
3. よくある原因：
   - `node_modules`がコミットされている（`.gitignore`を確認）
   - 依存関係のバージョン問題（`package.json`を確認）

### サイトが表示されない場合

1. ビルドが成功しているか確認
2. ブラウザのキャッシュをクリア
3. Netlifyの「Site settings」→「Build & deploy」で設定を確認

### Next.jsプラグインが動作しない場合

`netlify.toml`ファイルが正しく設定されているか確認してください。
既に作成済みです。

---

## 📝 チェックリスト

デプロイ前に確認：

- [ ] Gitリポジトリが初期化されている
- [ ] すべてのファイルがコミットされている
- [ ] GitHubリポジトリが作成されている
- [ ] GitHubにプッシュが完了している
- [ ] Netlifyアカウントが作成されている
- [ ] Netlifyでリポジトリが接続されている
- [ ] ビルド設定が正しい
- [ ] デプロイが成功している

---

## 🎉 完了！

これで、ポートフォリオサイトがインターネット上で公開されました！

URLを共有して、誰でもアクセスできるようになります。
