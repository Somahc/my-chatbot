<script setup>
import { processExpression } from '@vue/compiler-core';
import { ref } from 'vue'
import { getResponse } from './components/getResponse';
import makePrompt from './components/makePrompt'

const message = ref("");
const messageHistory = ref([]);

//初期メッセージ
messageHistory.value.push(makePrompt('assistant', 'こんにちは！なにかお手伝いできることはありますか？'));

//送信ボタンクリック時
const send_onClick = async () => {
  const prompt = makePrompt('user', message.value);
  messageHistory.value.push(prompt);
  const response = await getResponse(prompt);
  message.value = '';
  messageHistory.value.push(response);
}

</script>

<template>
  <nav>
    <router-link to="/">Top</router-link>  | <router-link to="/chat">Chat</router-link>
  </nav>
  <router-view />
</template>

<style>
.aiMessage{
  border-radius: 0px 10px 10px 10px;
  background-color: antiquewhite;
  margin-right: 200px;
  padding: 15px;
  font-size: large;
  font-weight: 700;

}

.userMessage{
  border-radius: 10px 0px 10px 10px;
  background-color: aquamarine;
  text-align: right;
  margin-left: 200px;
  padding: 15px 15px 15px 15px;
  font-size: large;
  font-weight: 700;
}

.chatContainer{
  width: 75%;
  margin: 0 auto;
}

.messageBox{
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>