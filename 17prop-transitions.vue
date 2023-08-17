<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      > <!--ダイアログコンポーネントを示しています。transition 属性によってダイアログの表示アニメーションが指定されており、
      width="auto" 属性によってダイアログの幅が自動的に調整されるようになります。-->
        <template v-slot:activator="{ props }">
        <!--ダイアログのアクティベーター（開くためのトリガー）を指定しています。
        ここでは v-btn を使用しています。アクティベーターはボタンのクリックなどに反応してダイアログを表示します。-->
          <v-btn
            color="primary"
            v-bind="props"
          >From the bottom</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the bottom"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
            <!--ダイアログ内のアクションボタンを指定しています。
            justify-end クラスによってボタンが右側に寄せられるように設定されています。-->
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
              <!--ダイアログを閉じるためのアクションボタンを指定しています。
              ボタンをクリックすると isActive 変数が false に設定され、ダイアログが非表示になります。-->
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>

    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >From the top</v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the top"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>