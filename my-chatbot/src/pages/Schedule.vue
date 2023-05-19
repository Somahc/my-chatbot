<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted, computed } from 'vue';

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

const calendars = computed(() => {
    return getCalendar();
})

onMounted(() => {
    console.log(getStartDate())
    console.log(getEndDate())
    console.log(getCalendar())
})

</script>

<template>
    <h2>{{ currentDate }}</h2>
    <div style="max-width:900px;border-top:5px solid red;">
        <div 
            v-for="(week, index) in calendars" 
            :key="index" 
            style="display:flex;border-left:5px solid green;"
        >
            <div v-for="(day, index) in week" 
                :key="index"
                style="
                    flex:1;min-height: 125px;
                    border-right:5px solid blue;
                    border-bottom:5px solid blue
                "
            >
                {{ day.date }}
            </div>
        </div>
    </div>

     <v-calendar expanded></v-calendar>
</template>