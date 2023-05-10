<script setup>
import { processExpression } from '@vue/compiler-core';
import { ref } from 'vue'
import { Configuration, OpenAIApi } from "openai";
import { getResponse } from './components/getResponse';
import makePrompt from './components/makePrompt'

const message = ref("");
const result = ref("結果");
const messageHistory = ref([]);

messageHistory.value.push(makePrompt('assistant', 'こんにちは！なにかお手伝いできることはありますか？'));

const send_onClick = async () => {
  const prompt = makePrompt('user', message.value);
  messageHistory.value.push(prompt);
  const response = await getResponse(prompt);
  message.value = '';
  messageHistory.value.push(response);
}

</script>

<template>
  <v-app>
    <div class="chatContainer">
    <div v-for="message in messageHistory">
      <div v-if="message.role == 'assistant'" class="aiMessage">
        {{ message.content }}
      </div>
      <div v-if="message.role == 'user'" class="userMessage">
        {{ message.content }}
      </div>
    </div>
    <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            v-model="message"
            type="text"
            placeholder="メッセージを送信"
          >
            <template v-slot:append>
              <v-btn color="primary" @click="send_onClick">送信</v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</div>
  </v-app>
</template>

<style>
.aiMessage{
  background-color: antiquewhite;
}

.userMessage{
  background-color: aquamarine;
}

.chatContainer{
  width: 80%;
  margin: 0 auto;
}
</style>