export async function getStaticPaths() {
    return {
      paths: [
        { params: { ... } }
      ],
      fallback: true // false or 'blocking'
    };
  }
  /*ページに動的ルートがあり getStaticProps を使用する場合
  静的に生成されるパスのリストを定義する必要がある。
  動的ルートを使用するページから getStaticPaths という関数をエクスポートすると、
  Next.js は で指定されたすべてのパスを静的に事前レンダリングします*/
  /* getStaticPathsとgetStaticPropsは一緒に使用する必要がある。*/ 