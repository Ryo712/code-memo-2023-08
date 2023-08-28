<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
<!-- <v-row> と <v-col> を使用して、レスポンシブな2列のレイアウトを作成しています。-->
      <v-card height="200px"> <!-- <v-card>コンポーネントは、カードコンポーネントを表しています。height="200px"はカードの高さ。-->
        <v-card-title class="bg-blue">
          <span class="text-h5">Menu</span>

          <v-spacer></v-spacer>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>
<!--v-bind="props" によって、アクティベータスロットに渡されたプロパティがボタンにバインドされます。-->
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
<!--メニューコンポーネント内の <v-list> コンポーネントには、v-for ループを使用して 
items 配列の各アイテムをリストアイテムとして表示しています。-->
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>

        <v-card-text>Lorem Ipsum</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>
<!--script setup:items 配列は、リアクティブなデータとして定義されています。-->
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
<!--このコードは、Vuetifyを使用してカードコンポーネント内にアクティベータアイコンを持つ
ドロップダウンメニューを表示するコンポーネントを定義している。
メニュー内にはアクティベータアイコンをクリックすると表示されるアイテムが含まれており、
ユーザーは選択できる-->




