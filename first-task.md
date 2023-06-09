# Markdownコンテンツの表示をする

[Issue](https://github.com/yamashita-kenngo/test-driven-solidjs/issues/2)

## 要件

- [x] マークダウンのタイトルがH1タグでレンダリングされている
- [x] マークダウンの本文がpタグでレンダリングされている
- [x] マークダウンのリストがulタグでレンダリングされている
- [x] マークダウンのリストの項目がliタグでレンダリングされている
- [x] マークダウンのリンクがaタグでレンダリングされている

## やること

- [x] Gherkin形式のテストを作成する
- [x] Cypressでテストを実行する
- [x] テストをパスするコードを書く

## やったこと

1. GitHub CopilotでGhrkin形式のテストを作成した。その内容からChatGPTを使用してCypressのテストコードを作成した。 [commit](https://github.com/yamashita-kenngo/test-driven-solidjs/pull/3/commits/67e63a849fc9b7659398d0ef9c8afc2f005bc748)

2. Solidjsのルーティングライブラリをインストールした。 [commit](https://github.com/yamashita-kenngo/test-driven-solidjs/pull/3/commits/160f2b22da14acc620445f115c171340379fc05e)

3. 空のMarkdownコンポーネントを作成した。ContainerコンポーネントからMarkdownへのルーティングを形成した。 [commit](https://github.com/yamashita-kenngo/test-driven-solidjs/pull/3/commits/5ad37dc6ea46843bdcfdb1277868e4a2eeaf1d81)

4. テストをパスするコードを書いた。 [commit](https://github.com/yamashita-kenngo/test-driven-solidjs/commit/cff89658d1a22423cfe90387ff7cc981890af9f3)