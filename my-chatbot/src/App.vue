<script setup>
import { processExpression } from '@vue/compiler-core';
import { ref } from 'vue'
import { Configuration, OpenAIApi } from "openai";

const API_KEY = "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";



const message = ref("")

const send_onClick = () => {
  console.log(message.value);
  //makePrompt(message.value);
  completion();
  message.value = "";

}

// APIキーを設定したオブジェクトを生成
const openai = new OpenAIApi(new Configuration({ apiKey: API_KEY }))

// ChatGPTに対する指示を以下に記述する --- (*2)
const promptTest = 'こんにちは'

// ChatGPTを呼び出す --- (*3)
async function callAPI() {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: promptTest,
    });
    const answer = response.data.choices[0].text
    console.log(answer)
    console.log(response.data)
}
callAPI()




/*
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

(async () => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "chatGPTってなに？" }],
  });
  console.log(response.data.choices[0].text);
  console.log("a");
})();

/*
async function sendPrompt(prompt = '') {
  const API_KEY = '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'

  if (!prompt) return

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'prompt': prompt,
      "max_tokens": 150,
      "temperature": 1,
    }),
  })

  const data = await response.json()
  console.log(data.choices[0].text.trim())
}

let prompt = 'Hello'
sendPrompt(prompt)





/*
//const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

(async () => {
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    prompt: "Hello!",
    temperature: 0,
    max_tokens: 7,
  });
  console.log(response.data.choices[0].text);
  console.log("a");
})();
*/

/*
const makePrompt = (userMessage) => {
  const response = fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'stream'
    })
  })
}
*/
</script>

<template>
  <v-app>
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
  </v-app>
</template>

<style>

</style>