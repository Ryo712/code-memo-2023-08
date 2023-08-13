<template>
  <v-container>
    <v-row align="center" justify="center">
        <!--行を表すコンポーネントで、グリッド内の水平なセクションを定義します。-->
      <v-col cols="auto">
        <v-btn size="x-small">Extra small Button</v-btn>
      </v-col>
      <!--列を表すコンポーネントで、グリッド内の垂直なセクションを定義します。
      cols="auto" は、コンテンツのサイズに合わせて列の幅を自動調整することを意味します。-->

      <v-col cols="auto">
        <v-btn size="small">Small Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn>Regular Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="large">Large Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="x-large">X-Large Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<!--各 <v-col> 内にある <v-btn> は、異なるサイズのボタンを表しています。
サイズは size 属性で指定されており、以下のサイズが使用されています。
x-small small デフォルト large x-large -->
