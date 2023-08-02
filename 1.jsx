export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
/*(サーバーサイド レンダリング)という関数をgetServerSidePropsページからエクスポートすると、
Next.js は、 から返されたデータを使用して、リクエストごとにこのページを事前レンダリングします
getServerSidePropsサーバー側でのみ実行され、ブラウザーでは実行されません。
このページを直接リクエストすると、getServerSidePropsリクエスト時に実行され、
このページは返された props を使用して事前レンダリングされます。
*/
/*next/linkまたは を介し​​てクライアント側のページ遷移でこのページをリクエストするとnext/router、
Next.js は API リクエストをサーバーに送信し、サーバーが実行されます。 */