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

## 単体テストの準備

依存パッケージをインストールする。

> npm install --save-dev vitest
>
> npm install --save-dev jsdom
>
> npm install --save-dev solid-testing-library

package.jsonにVitestのスクリプトを追加する。

```json
"scripts": {
    "test": "vitest"
  }
```

vitest.config.tsを作成する。

```ts
import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: 'jsdom',
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
``` 

テストファイルを作成する