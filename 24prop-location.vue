<template>
  <div class="text-center">
    <v-select
      v-model="location"
      :items="locations"
      label="Location"
    ></v-select>
<!--<v-select>コンポーネントは、ドロップダウンメニューの選択肢を表示し、
    v-model ディレクティブを使用して選択された位置を location 変数にバインドしています。
    :items プロパティには locations 配列が渡され、メニューの選択肢として使用されます。
    label 属性は、セレクトボックスのラベルを指定します。-->
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props" 
        >
<!--v-slot:activator="{ props }" は、アクティベータスロット内でアクティベータのプロパティを受け取るための構文です。
アクティベータスロット内には、<v-btn> コンポーネントがあり、アクティベータとして機能します。
v-bind="props"は、アクティベータスロットに渡されたプロパティをボタンにバインドしています。-->
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
<!--<v-list> 内では、v-for ループを使用して items 配列の各アイテムをリストアイテムとして表示しています。-->
    </v-menu>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
/*import { ref } from 'vue' は、Vue Composition API から ref をインポートしています。
ref は、リアクティブなデータを作成するための関数です。*/
  const location = ref('end')

  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
  const locations = [
    'top',
    'bottom',
    'start',
    'end',
    'center',
  ]
</script>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      locations: [
        'top',
        'bottom',
        'start',
        'end',
        'center',
      ],
      location: 'end',
    }),
  }
//items 配列と locations 配列は、リアクティブなデータとして定義されます。
</script>