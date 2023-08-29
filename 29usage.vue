<template>
  <div class="text-center">
    <v-btn
      color="error"
      @click="overlay = !overlay"
    >
<!--@click="overlay = !overlay" によって、ボタンがクリックされると overlay データプロパティが切り替わります。-->
      Show Overlay
    </v-btn>
<!--<v-btn>コンポーネントは、"Show Overlay" というテキストを持つボタンです。-->
    <v-overlay v-model="overlay"></v-overlay>
  </div>
</template>
<!--<v-overlay> コンポーネントは、オーバーレイ（半透明の背景）を表示するコンポーネントです。
v-model="overlay" によって、オーバーレイが表示されるかどうかを制御しています。-->
<script>
  export default {
    data: () => ({
      overlay: false,
    }),

    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 2000)
      },
    },
  }
</script>
<!--watch オプション内で、overlay の値が変更された際に実行される処理が定義されています。
オーバーレイが表示される際（val が true になる際）に、2秒後にオーバーレイを非表示にする処理が行われます。
これによって、2秒間オーバーレイが表示された後に自動的に非表示になります。 -->

<!--このコードは、Vuetifyを使用してボタンをクリックすると一時的なオーバーレイを表示し、
その後一定時間経過後に自動的に非表示にするコンポーネントを定義しています。
オーバーレイはエラーカラーの背景を持ち、ボタンをクリックすることで表示と非表示が切り替わります。-->