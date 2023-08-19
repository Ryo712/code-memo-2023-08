<template>
  <v-row justify="center">
<!--行を表示しています。justify="center" 属性によって、子要素が中央に配置されるように指定されています。-->
    <v-dialog
      v-model="dialog"
      scrollable
      width="auto"
    >
<!--v-model ディレクティブによってダイアログが表示されるかどうかが制御され、
scrollable 属性によってダイアログ内のコンテンツがスクロール可能な状態になります。
width="auto" 属性によってダイアログの幅が自動的に調整されるようになります。-->
      <template v-slot:activator="{ props }">
<!--ダイアログのアクティベーター（トリガー）を指定しています。
ここでは v-btn を使用してアクティベーターを作成し、props をバインドしています。-->
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
<!--ラジオボタングループを表示しています。v-model ディレクティブによって選択されたラジオボタンの値が 
dialogm1 にバインドされます。column 属性によってラジオボタンが縦に配置されるように指定されています。-->
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            <v-radio
              label="Bahrain"
              value="bahrain"
            ></v-radio>
            <v-radio
              label="Bangladesh"
              value="bangladesh"
            ></v-radio>
            <v-radio
              label="Barbados"
              value="barbados"
            ></v-radio>
            <v-radio
              label="Belarus"
              value="belarus"
            ></v-radio>
            <v-radio
              label="Belgium"
              value="belgium"
            ></v-radio>
            <v-radio
              label="Belize"
              value="belize"
            ></v-radio>
            <v-radio
              label="Benin"
              value="benin"
            ></v-radio>
            <v-radio
              label="Bhutan"
              value="bhutan"
            ></v-radio>
            <v-radio
              label="Bolivia"
              value="bolivia"
            ></v-radio>
            <v-radio
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-radio>
            <v-radio
              label="Botswana"
              value="botswana"
            ></v-radio>
            <v-radio
              label="Brazil"
              value="brazil"
            ></v-radio>
            <v-radio
              label="Brunei"
              value="brunei"
            ></v-radio>
            <v-radio
              label="Bulgaria"
              value="bulgaria"
            ></v-radio>
            <v-radio
              label="Burkina Faso"
              value="burkina"
            ></v-radio>
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>

          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
<!--ダイアログを閉じるためのアクションボタンを表示しています。
@click イベントハンドラによって dialog 変数が false に設定され、ダイアログが非表示になります。-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'

  const dialogm1 = ref('')
  const dialog = ref(false)
</script>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>