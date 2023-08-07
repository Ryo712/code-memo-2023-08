const createItem = (req, res) => {
    /*引数として req（リクエスト）と res（レスポンス）オブジェクトを受け取ります。*/ 
    console.log(req.body.title)
    /**リクエストのボディ内にある title プロパティの値をコンソールに出力。 */
    return res.status(200).json({message: "アイテム作成"})
}
/**HTTPステータスコード 200 (OK) を設定しています。これはリクエストが正常に処理されたことを示します。 */
export default createItem