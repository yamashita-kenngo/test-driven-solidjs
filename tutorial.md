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

# BDDスタイルのテストの準備

CucumberとCypressを統合するために、依存パッケージをインストールする。

> npm install --save-dev @badeball/cypress-cucumber-preprocessor
>
> npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
>

package.jsonにスクリプトを追加する。
  
  ```json
  "scripts": {
    "bdd:run": "cypress run --spec cypress/e2e/**/*.feature"
  }
  ```

cypress.config.tsにpluginsを追加する。

```ts
import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
```

# テストファイルを作成する

## E2Eテストの場合

- Gherkin記法でアプリケーションの振る舞いを記述する hoge.huga.feature
- Gherkin記法に紐づいたテストコードをCypressで記述する hoge.huga.spec.ts
- テストコードの実行結果をCypressで確認する

## 単体テストの場合

- テストコードを記述する hoge.huga.test.ts
- アプリケーションコードを記述する hoge.huga.ts
- テストコードの実行結果をVitestで確認する

