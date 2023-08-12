<template>
  <v-container>
    <v-row justify="center" align="center">
        <!--ボタンコンポーネントは v-col コンポーネント内に配置されており、
        v-rowコンポーネント内の行内で中央揃えになるように配置されています。-->
      <v-col cols="auto">
        <v-btn density="compact">Compact Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="comfortable">Comfortable Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="default">Default Button</v-btn>
      </v-col>
      <!--density 属性によってボタンの密度（compact, comfortable, default）を指定しています。
      ボタンの内部にはテキスト「Compact Button」が含まれています。
      同様に他のボタンも定義されています。density 属性が異なるため、ボタンの表示スタイルも異なります。-->
    </v-row>
  </v-container>
</template>