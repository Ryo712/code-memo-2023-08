<template>
  <div class="d-flex justify-space-around">
<!--<div> タグには d-flex justify-space-around のクラスが付いており、
Flexboxを使用して要素を中央寄せに配置しています。-->
    <v-menu>
      <template v-slot:activator="{ props }">
<!--1つ目の<v-menu> タグ内では、アクティベータスロットが定義されています。
    v-slot:activator="{ props }" は、アクティベータスロット内で渡されるプロパティを受け取るための構文です。-->
        <v-btn
          color="primary"
          v-bind="props"
        >
          Activator slot
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
<!--<v-list> 内では、v-for ループを使用して items 配列の各アイテムをリストアイテムとして表示しています。-->
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      color="primary"
    >
      Parent activator

      <v-menu activator="parent">
<!--2つ目の <v-menu> は、親要素の <v-btn> がアクティベータとなります。
activator="parent" 属性を使用して親要素をアクティベータとして指定しています。この場合、親要素のボタンをクリックするとメニューが表示されます。-->
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn
      id="menu-activator"
      color="primary"
    >
      Sibling activator
    </v-btn>

    <v-menu activator="#menu-activator">
<!--3つ目の <v-menu> は、特定の要素のIDをアクティベータとして指定しています。
activator="#menu-activator" 属性を使用して、IDが "menu-activator" の要素をアクティベータとして指定しています。
この場合、IDが指定された要素をクリックするとメニューが表示されます。-->
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

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