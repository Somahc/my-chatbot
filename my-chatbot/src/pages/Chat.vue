<script setup>
import { ref } from 'vue'
import { getResponse } from '../components/getResponse';
import makePrompt from '../components/makePrompt'

const message = ref("");
const messageHistory = ref([]);
const isLoading = ref(false);
//初期メッセージ
messageHistory.value.push(makePrompt('assistant', 'こんにちは！なにかお手伝いできることはありますか？'));

//送信ボタンクリック時
const send_onClick = async () => {
    isLoading.value = true;
  const prompt = makePrompt('user', message.value);
  messageHistory.value.push(prompt);
  const response = await getResponse(prompt);
  message.value = '';
  messageHistory.value.push(response);
  isLoading.value = false;
}

</script>

<template>  
    <div>
        <h2>
            Chat.vueテストページ
        </h2>
    </div>
    <div class="chatContainer">
        <div v-for="message in messageHistory" class="messageBox">
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
                        <div v-if="isLoading" class="loading">ChatGPTがタイプ中...</div>
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

.loading{
    font-weight: 700;
}
</style>