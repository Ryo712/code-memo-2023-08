<template>
  <v-app id="inspire">
    <v-app-bar
      app
      extended
    >
    <!-- アプリケーションの上部に表示されるアプリバー（アプリケーションバー）コンポーネントです。
    app属性はアプリケーションバーがアプリケーション全体の一部であることを示し、extended属性はアプリケーションバーが拡張されていることを示します。 -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
        <!--Vuetifyのアイコンコンポーネントで、
        ここでは"mdi-dots-vertical"というアイコンが表示される-->
      </v-btn>
    </v-app-bar>

    <v-main>
    <!--: アプリケーションのメインコンテンツエリアを定義するコンポーネント -->
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>