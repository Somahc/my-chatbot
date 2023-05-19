<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted } from 'vue';

onMounted(() => {
   let date = moment().startOf("month");
   const youbiNum = date.day();
   console.log(youbiNum) 
});

</script>

<template>
     <v-calendar expanded></v-calendar>
</template>