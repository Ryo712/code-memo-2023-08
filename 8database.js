import mongoose from "mongoose"

const connectDB = async() => {
    try{
       await mongoose.connect("mongodb+srv://Ryo:hil712@ryo.uuc5clc.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
        /**MongoDBへの接続が成功した場合、コンソールに表示されるメッセージ。*/
        /**mongoose.connect メソッドを使用して、指定されたMongoDBのURIに接続を試みています。
         * URIは、ユーザー名、パスワード、ホスト、データベース名などの情報を含んでおり、この情報を使ってMongoDBへの接続が確立されます。
         * URI内のRyoとhil712はユーザー名とパスワードで、appDataBaseはデータベース名です。 */

    }catch(err){
        console.log("Failure: Unconnected to MmngoDB")
        throw new Error()
        /**MongoDBへの接続が失敗した場合、コンソールに表示されるメッセージ */

    }
    /**try { ... } catch (err) { ... }: 非同期処理中のエラーをキャッチするためのトライキャッチ構文を使用しています。
     * コードの実行中にエラーが発生した場合、catch ブロックが実行されます */
}

export default connectDB