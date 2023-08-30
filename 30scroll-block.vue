<template>
  <div class="d-flex justify-center">
    <v-btn>
      block
<!--<v-btn> コンポーネントは、"block" というテキストを持つボタンです。
その内部に、<v-overlay> コンポーネントが配置されています。
このコンポーネントは、ボタンをクリックすると表示されるオーバーレイを提供します。
以下のオプションが指定されています。-->
      <v-overlay
        activator="parent" 
        location-strategy="connected"
        scroll-strategy="block"
      >
<!--activator="parent": オーバーレイが表示されるトリガーとして親要素を指定しています。
つまり、ボタンがクリックされるとオーバーレイが表示されます。
scroll-strategy="block": オーバーレイが表示された際に背後のコンテンツをスクロールできないように設定しています。-->
        <v-card class="pa-2">
          Hello!
        </v-card>
<!--class="pa-2" によってカードの内側のパディングが設定されています。カード内には "Hello!" というテキストが表示されます。-->
      </v-overlay>
    </v-btn>
  </div>
</template>
<!--ボタンクリックでオーバーレイを持つコンポーネントを定義。オーバーレイはボタンに連結されて位置し、
コンテンツのスクロールをブロックします。オーバーレイ内にはカードが表示され、"Hello!" というテキストが表示されます。-->