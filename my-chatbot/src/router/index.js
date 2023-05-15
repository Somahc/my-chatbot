import { createRouter, createWebHistory } from 'vue-router';
import Top from '/src/pages/Top.vue'
import Chat from '/src/pages/Chat.vue'

const routes = [
    {
        path: '/',
        name: 'Top',
        component: Top
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;