<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted } from 'vue';

const currentDate = moment();

//カレンダー最初の日を取得
const getStartDate = () => {
    let date = moment(currentDate);
    date.startOf("month");
    const youbiNum = date.day();
    return date.subtract(youbiNum, "days");
}

//カレンダー最終日を取得
const getEndDate = () => {
    let date = moment(currentDate);
    date.endOf("month");
    const youbiNum = date.day();
    return date.add(6 - youbiNum, "days");
}

//カレンダーの日付を保存
const getCalendar = () => {
    let startDate = getStartDate();
    const endDate = getEndDate();
    const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

    let calendars = [];
    for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
            weekRow.push({
                date: startDate.get("date"),
            });
            startDate.add(1, "days");
        }
        calendars.push(weekRow);
    }
    return calendars;
}

onMounted(() => {
    console.log(getStartDate())
    console.log(getEndDate())
    console.log(getCalendar())
})

</script>

<template>
     <v-calendar expanded></v-calendar>
</template>