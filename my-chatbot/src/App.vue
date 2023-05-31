<script setup>
const sidebarContent = [
  {name: 'Top', href: '/', icon: UserIcon }
]

import {
    Bars3BottomLeftIcon,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
    ChatBubbleLeftEllipsisIcon,
    CommandLineIcon,
    DocumentTextIcon,
    AcademicCapIcon,
    CloudIcon,
    LockClosedIcon,
    CurrencyYenIcon,
    Cog8ToothIcon,
    ChatBubbleLeftRightIcon,
    UserIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <v-app>
    <v-navigation-drawer
      app
      dark
      clipped
      :width="200"
    >
      <v-list
        nav
        dense
      >
        <v-list-item prepend-icon="mdi-home" title="トップ" href="/" class="sidebar"></v-list-item>
        <v-list-item prepend-icon="mdi-chat" title="チャット" href="/chat"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar-month" title="スケジュール" href="/schedule"></v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>

</style>