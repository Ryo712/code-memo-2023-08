<template> <!--テンプレートセクションはコンポーネントのビュー部分を定義します。-->
  <div class="text-center">
    <v-btn
      color="primary"
    > <!--Vuetify のボタンコンポーネントで、
    color 属性によってボタンの色がプライマリーカラーに設定されています。-->
      Open Dialog

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card> <!--カードコンポーネントで、ダイアログ内のコンテンツをラップします。-->
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
            <!--ダイアログ内のアクションボタンで、ダイアログを閉じるためのボタンです。
            block 属性によってボタンが横幅いっぱいに広がるように設定されています。
            @click イベントハンドラによってボタンがクリックされたときに dialog の状態が false に設定され、
            ダイアログが閉じられます。-->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const dialog = ref(false)
</script>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>