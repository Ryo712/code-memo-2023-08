<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
<!-- <v-menu>コンポーネントは、ポップオーバーとして振る舞うメニューコンポーネントです。
v-model="menu" によって、メニューが開いたり閉じたりする状態が制御されます。-->
<!--:close-on-content-click="false" によって、メニュー内のコンテンツをクリックしてもメニューが閉じないように設定されています。-->
<!--location="end" によって、メニューがアクティベータの右側に表示されるように指定されています。-->
      <template v-slot:activator="{ props }">
        <v-btn
          color="indigo"
          v-bind="props"
        >
<!-- v-bind="props" は、アクティベータから受け取ったデザインや動作に関する情報(プロパティ)を、
ボタンに適用するための便利な方法なのです。これによって、ボタンはアクティベータがどのような状態であっても、
正しく表示され、適切に機能することが保証されます。-->
          Menu as Popover
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            title="John Leider"
            subtitle="Founder of Vuetify"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                :class="fav ? 'text-red' : ''"
                icon="mdi-heart"
                @click="fav = !fav"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-switch
              v-model="message"
              color="purple"
              label="Enable messages"
              hide-details
            ></v-switch>
          </v-list-item>

          <v-list-item>
            <v-switch
              v-model="hints"
              color="purple"
              label="Enable hints"
              hide-details
            ></v-switch>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const fav = ref(true)
  const menu = ref(false)
  const message = ref(false)
  const hints = ref(true)
</script>

<script>
  export default {
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }),
  }
</script>
<!--要約すると、このコードは、Vuetifyを使用してポップオーバーとして振る舞うメニューコンポーネントを定義しています。
メニュー内にはボタンやスイッチなどのコンテンツが含まれており、ユーザーが設定を変更したりキャンセルしたりすることができます。-->