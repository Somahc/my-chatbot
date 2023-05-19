<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted } from 'vue';

const currentDate = moment();

const getStartDate = () => {
    let date = moment(currentDate);
    date.startOf("month");
    const youbiNum = date.day();
    return date.subtract(youbiNum, "days");
}

const getEndDate = () => {
    let date = moment(currentDate);
    date.endOf("month");
    const youbiNum = date.day();
    return date.add(6 - youbiNum, "days");
}

onMounted(() => {
    console.log(getStartDate())
    console.log(getEndDate())
})

</script>

<template>
     <v-calendar expanded></v-calendar>
</template>