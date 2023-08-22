<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list :items="items"></v-list>
<!--template内部に<v-list> コンポーネントがあり、リストのアイテムを表示するために使用されます。
    v-list の :items プロパティには items 配列がバインディングされています。-->
  </v-card>
</template>

<script setup>
  const items = [
    {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
  ]
</script>
<!--通常の Vue コンポーネントのスクリプト部分。通常の Vue コンポーネントのスクリプト部分です。
data プロパティには、アイテムの配列が含まれており、<template> 内で items プロパティを通じて参照されます。-->
<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Item #1',
          value: 1,
        },
        {
          title: 'Item #2',
          value: 2,
        },
        {
          title: 'Item #3',
          value: 3,
        },
      ],
    }),
//Vueコンポーネントは、このdata オブジェクト内で状態データを管理します。
  }
</script>