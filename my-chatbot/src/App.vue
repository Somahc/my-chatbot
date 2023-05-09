<script setup>
import { processExpression } from '@vue/compiler-core';
import { ref } from 'vue'
import { Configuration, OpenAIApi } from "openai";
import { getResponse } from './components/getResponse'

const message = ref("")

const result = ref("結果")


const send_onClick = async () => {
  const response = await getResponse(message.value)
  result.value = response;
}

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
  {{ result }}
  </v-app>
</template>

<style>

</style>