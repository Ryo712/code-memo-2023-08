<template>
  <div>
    <v-row
      justify="center"
    >
<!--Vuetify のグリッドシステムを使用して、行を表示しています。
justify="center" 属性によって、子要素が中央に配置されるように指定されています。-->
      <v-btn
        color="primary"
        class="ma-2"
        @click="dialog = true"
      >
        Open Dialog 1
      </v-btn>
<!--プライマリーカラーのボタンを表示しています。@click イベントハンドラによって 
dialog 変数が true に設定され、ダイアログ1が表示されます。-->
      <v-dialog
        v-model="dialog"
        width="auto"
      >
<!--ダイアログ1を示しています。v-model ディレクティブによってダイアログの表示状態が制御されます。-->
        <v-card>
          <v-card-title>
            Dialog 1
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              class="ma-2"
              @click="dialog2 = true"
            >
              Open Dialog 2
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
        width="auto"
      >
<!--ダイアログ2を示しています。v-model ディレクティブによってダイアログの表示状態が制御されます。-->
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              @click="dialog3 = !dialog3"
            >
              Open Dialog 3
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog3"
        width="auto"
      >
<!--ダイアログ3を示しています。v-model ディレクティブによってダイアログの表示状態が制御されます。-->
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog3 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const dialog = ref(false)
  const dialog2 = ref(false)
  const dialog3 = ref(false)
</script>
<!--コンポーネントのセットアップセクションで、ref を使用して 
dialog、dialog2、dialog3 変数を初期化しています。
これにより、各ダイアログの表示/非表示を制御する変数が提供されます。-->
<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        dialog3: false,
      }
    },
  }
</script>