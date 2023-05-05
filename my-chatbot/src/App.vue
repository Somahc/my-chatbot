<script setup>
import { ref } from 'vue'

const message = ref("")

const send_onClick = () => {
  console.log(message.value);
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
            label="Message"
            type="text"
            @keyup.enter="send_onClick"
          >
            <template v-slot:append>
              <v-btn color="primary" @click="send_onClick">送信</v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  {{ message }}
  </v-app>
</template>

<style>

</style>