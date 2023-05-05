<script setup>


const items = [
  {
    title: 'ホーム',
    path: './src/Home.vue',
    icon: 'mdi-home'
  },
  {
    title: 'アカウント',
    path: '/Account',
    icon: 'mdi-account-box'
  },
  {
    title: 'チャット',
    path: '/Chat',
    icon: 'mdi-message'
  },
  {
    title: '設定',
    path: '/Setting',
    icon: 'mdi-cog'
  },
]
</script>

<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-deep-purple"
          theme="dark"
          permanent
        >
          <v-list color="transparent">
            <v-list-item v-for="item in items" active-color="primary" :to="item.path" class="py-3">
              <v-icon :icon="item.icon" class="mr-6" />
              <v-list-item-title class="font-weight-bold" v-text="item.title" />
            </v-list-item>
          </v-list>

        </v-navigation-drawer>
        <v-main style="height: 800px">
          
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="message"
                    :append-icon="mdi-send"
                    :prepend-icon="icon"
                    variant="filled"
                    clear-icon="mdi-close-circle"
                    clearable
                    label="メッセージ"
                    type="text"
                    @click:append-inner="toggleMarker"
                    @click:append="sendMessage"
                    @click:prepend="changeIcon"
                    @click:clear="clearMessage"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>





        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style>
.textInputt {
  outline: blue;
}
</style>