# セットアップ
最初に、新しいSolid.jsのアプリケーションを作成する。

> npx degit solidjs/templates/ts my-app
>
> cd my-app
>
> npm i or yarn or pnpm
>
> npm run dev or yarn or pnpm

# Cypressの追加とセットアップ

> npm install --save-dev cypress

Rootディレクトリにcypressディレクトリを作成する。

> mkdir cypress

package.jsonにCypressのスクリプトを追加する。

```json
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
```

locaclhost:3000にアクセスするために、cypress.jsonを作成する。

```json
{
  "baseUrl": "http://localhost:3000"
}
```

