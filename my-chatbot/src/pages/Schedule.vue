<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted, computed, ref } from 'vue';

const currentDate = ref(moment());

//カレンダー最初の日を取得
const getStartDate = () => {
    let date = moment(currentDate.value);
    date.startOf("month");
    const youbiNum = date.day();
    return date.subtract(youbiNum, "days");
}

//カレンダー最終日を取得
const getEndDate = () => {
    let date = moment(currentDate.value);
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

const nextMonth = () => {
    currentDate.value = moment(currentDate.value).add(1, "month");
    console.log(currentDate.value);
}

const prevMonth = () => {
    currentDate.value = moment(currentDate.value).subtract(1, "month");
}
onMounted(() => {
    console.log(getStartDate())
    console.log(getEndDate())
    console.log(getCalendar())
})

</script>

<template>
    <h2>{{ currentDate }}</h2>
    <button @click="prevMonth">前の月</button>
    <button @click="nextMonth">次の月</button>
    <div style="max-width:900px;border-top:1px solid gray;">
        <div 
            v-for="(week, index) in calendars" 
            :key="index" 
            style="display:flex;border-left:1px solid gray;"
        >
            <div v-for="(day, index) in week" 
                :key="index"
                style="
                    flex:1;min-height: 125px;
                    border-right:1px solid gray;
                    border-bottom:1px solid gray
                "
            >
                {{ day.date }}
            </div>
        </div>
    </div>

     <v-calendar expanded></v-calendar>
</template>