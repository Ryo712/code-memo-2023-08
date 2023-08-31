<template>
  <div class="d-flex justify-center">
    <v-btn>
      Close

      <v-overlay
        activator="parent" 
        location-strategy="connected"
        scroll-strategy="close"
      >
<!-- ・<v-overlay> コンポーネントが配置されています。このコンポーネントは、
ボタンをクリックすると表示されるオーバーレイを提供します。
・activator="parent"オーバーレイが表示されるトリガーとして親要素を指定しています。
つまり、ボタンがクリックされるとオーバーレイが表示されます。
・location-strategy="connected": オーバーレイがアクティベータに連結されるように位置戦略を設定しています。
これにより、オーバーレイがアクティベータの近くに表示されます。
・scroll-strategy="close": オーバーレイ内でスクロールが行われるとオーバーレイが自動的に閉じられるように設定しています。
-->
        <v-card class="pa-2">
          Hello!
        </v-card>
      </v-overlay>
    </v-btn>
  </div>
</template>
<!--ボタンクリックで表示されるオーバーレイを持つコンポーネントを定義。
オーバーレイはボタンに連結されて位置し、コンテンツのスクロールを行うと自動的に閉じられます。
オーバーレイ内にはカードが表示され、"Hello!" というテキストが表示されます。-->