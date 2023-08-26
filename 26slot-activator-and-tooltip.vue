<template>
  <div class="text-center">
    <v-menu>
<!-- v-menu:アクティベータスロット内で、<v-tooltip> コンポーネントが使用されています。
これにより、ボタンにマウスをホバーするとツールチップが表示されるようになります。-->
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
              color="primary"
              v-bind="mergeProps(menu, tooltip)"
            >
              Dropdown w/ Tooltip
            </v-btn>
<!-- v-btnコンポーネントは、ツールチップとアクティベータを持つボタンを表しています。
v-bind="mergeProps(menu, tooltip)" は、アクティベータとツールチップのプロパティをマージしてボタンにバインドしています。-->
          </template>
          <span>I'm A Tooltip</span>
        </v-tooltip> <!-- v-tooltip 内には、ツールチップの内容(ホバーした時のメッセージ)となる <span> 要素があります。-->
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
  import { mergeProps } from 'vue'

  const items = [
    { title: 'Click Me 1' },
    { title: 'Click Me 2' },
    { title: 'Click Me 3' },
    { title: 'Click Me 4' },
  ]
</script>

<script>
  import { mergeProps } from 'vue'

  export default {
    data: () => ({
      items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }),
    methods: {
      mergeProps,
    },
  }
</script>
<!--このコードは、Vuetifyを使用してボタンにツールチップを追加し、
それをアクティベータとして使用してドロップダウンメニューを表示するコンポーネントを定義している。
アクティベータとツールチップのプロパティがマージされ、ボタンに適切な機能を提供する。-->





