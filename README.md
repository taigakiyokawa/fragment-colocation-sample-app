# Fragment Colocation Sample App

Used in the article 👉 [GraphQL の Fragment Colocation を導入したら依存関係がスッキリしてクエリもコンポーネントも書きやすくなった](https://zenn.dev/moneyforward/articles/20221211-fragment-colocation).

The sample application to colocate GraphQL operations using fragments with React Components.
This app is based on [next.js.examples/api-routes-apollo-server-and-client](https://github.com/vercel/next.js/tree/6cfebfb02c2a52a1f99fca59a2eac2d704d053db/examples/api-routes-apollo-server-and-client).

![component_image](https://user-images.githubusercontent.com/40013676/206884203-c04d4713-5a7d-4de7-9a16-b8a8c4293b29.png)

## Correspondence between a query and components

### Before using fragments

![before_colocate](https://user-images.githubusercontent.com/40013676/206859576-d0083a84-630f-424b-98c9-58b50abdca62.png)

### After using fragments

![after_colocate](https://user-images.githubusercontent.com/40013676/206859566-29c9125e-e6a9-43fc-a6f7-7c4d214ba6de.png)

- [[refactor] Colocate GraphQL operations with components #6](https://github.com/taigakiyokawa/fragment-colocation-sample-app/pull/6): the PR to colocate GraphQL operations with components
- [`before-colocated-fragments`](https://github.com/taigakiyokawa/fragment-colocation-sample-app/tree/before-colocate-fragments): the branch before colocated GraphQL operations with components
