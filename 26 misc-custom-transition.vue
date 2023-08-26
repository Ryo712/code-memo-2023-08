<template>
  <div class="d-flex justify-space-around">
<!--以下に3つの <v-menu> コンポーネントがあり、それぞれに異なるトランジション効果が設定されています。
トランジションはメニューが表示されるときのアニメーション効果を指定します。-->
<!--各 <v-menu> コンポーネント内にはアクティベータスロットがあり、その内部に <v-btn> コンポーネントがあり、
アクティベータとして機能します。v-bind="props" は、アクティベータスロットに渡されたプロパティをボタンにバインドしています。-->
    <v-menu
      transition="scale-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Scale Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Slide X Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Slide Y Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<!--各 <v-menu> 内の <v-list> コンポーネントには、v-for ループを使用して 
items 配列の各アイテムをリストアイテムとして表示しています。-->
<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>
<!--　script setup:items配列はリアクティブなデータとして定義されている-->
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
<!--このコードは、Vuetifyを使用して異なるトランジション効果を持つ複数のドロップダウンメニューを表示するコンポーネントを定義している。
各メニューのアクティベータとしてボタンが使用され、トランジションがメニューの表示アニメーションに適用される。-->