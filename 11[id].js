import connectDB from "../../../utils/database"
const getSingleItem = async(req, res) => {
    /*これはアイテムの取得を担当するAPIエンドポイントです。
    req はリクエストオブジェクト、res はレスポンスオブジェクトを表しています。*/
    try{
        await connectDB()
        console.log(req.query.id)
        return res.status(200).json({message: "アイテム読み取り成功（シングル）"})
        /*成功時にはステータスコード 200 でレスポンスを返し、JSON形式のメッセージを含めています。*/
    }catch(err){
        return res.status(400).json({message: "アイテム読み取り失敗（シングル）"})
    }
    /* エラーが発生した場合、ステータスコード 400 でレスポンスを返し、JSON形式のエラーメッセージを含めています。*/
    /*このブロックはエラーハンドリングを行うためのトライキャッチ構文です。
    コードの実行中にエラーが発生した場合、catch ブロックが実行されます。*/
}
export default getSingleItem