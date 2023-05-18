<script setup>
import Calendar from '../components/Calendar.vue';
</script>

<template>
    <Calendar />
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
</template>