<template>
  <div class="text-center">
    <v-menu
      open-on-hover
    >
<!--<v-menu> コンポーネントは、メニューコンポーネントです。
open-on-hover 属性は、このメニューをマウスホバー時に開くように設定します。-->
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>
<!--v-slot:activator="{ props }" は、アクティベータスロット内でアクティベータのプロパティを受け取るための構文です。
アクティベータスロット内には、<v-btn> コンポーネントがあり、アクティベータとして機能します。
v-bind="props" は、アクティベータスロットに渡されたプロパティをボタンにバインドしています。-->
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
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>
<!--script setupセクション:items 配列は、リアクティブなデータとして定義されています。-->
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>
<!--Vuetifyを使用してマウスホバー時にドロップダウンメニューが表示されるコンポーネントを定義しています。-->