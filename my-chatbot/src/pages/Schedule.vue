<script setup>
import Calendar from '../components/Calendar.vue';
import moment from "moment";
import { onMounted, computed, ref } from 'vue';

const currentDate = ref(moment());

let events = [
    { id: 1, name: "テスト", start: "2023-05-07", end: "2023-05-08", color: "blue"},
    { id: 2, name: "テスト2", start: "2023-05-07", end: "2023-05-07", color: "red"},
    { id: 3, name: "テスト3", start: "2023-05-07", end: "2023-05-07", color: "orange"}

]

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

const youbi = (dayIndex) => {
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    return week[dayIndex];
}

//カレンダーの日付を保存
const getCalendar = () => {
    let calendarDate = getStartDate();
    const endDate = getEndDate();
    const weekNumber = Math.ceil(endDate.diff(calendarDate, "days") / 7);

    let calendars = [];
    for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0; day < 7; day++) {
            let dayEvents = getDayEvents(calendarDate, day);
            weekRow.push({
                date: calendarDate.get("date"),
                month: calendarDate.format("YYYY-MM"),
                dayEvents
            });
            calendarDate.add(1, "days");
        }
        calendars.push(weekRow);
    }
    return calendars;
}

const calendars = computed(() => {
    return getCalendar();
})

const currentMonth = computed(() => {
    return currentDate.value.format("YYYY-MM");
})

const nextMonth = () => {
    currentDate.value = moment(currentDate.value).add(1, "month");
    console.log(currentDate.value);
}

const prevMonth = () => {
    currentDate.value = moment(currentDate.value).subtract(1, "month");
}

const getDayEvents = (date, day) => {
    let dayEvents = [];
    events.forEach(event => {
        let startDate = moment(event.start).format('YYYY-MM-DD')
        let endDate = moment(event.end).format('YYYY-MM-DD')
        let Date = date.format('YYYY-MM-DD')

        if(startDate == Date) {
            let width = getEventWidth(startDate, endDate, day)
            dayEvents.push({...event, width})
        }
    });
    return dayEvents;
}

const getEventWidth = (end, start, day) => {
    let betweenDays = moment(end).diff(moment(start), "days")
    if(betweenDays > 6 - day) { // イベント開始から終了までの日数が1週間の残りの日数より多いか少ないか判定
        return (6 - day) * 100 + 95;
    }else{
        return betweenDays * 100 + 95;
    }
}


onMounted(() => {
    console.log(getStartDate())
    console.log(getEndDate())
    console.log(getCalendar())
})

</script>

<template>
    <h2>{{ currentDate.format('YYYY[年]M[月]') }}</h2>
    <button @click="prevMonth">前の月</button>
    <button @click="nextMonth">次の月</button>
    <div class="calendar">
        <!--曜日表示部-->
        <div class="calendar-weekly">
            <div class="calendar-youbi" v-for="n in 7" :key="n">
                {{ youbi(n-1) }}
            </div>
        </div>
        <!--日付表示部-->
        <div 
            v-for="(week, index) in calendars" 
            :key="index" 
            class="calendar-weekly"
        >
            <div v-for="(day, index) in week" 
                :key="index"
                class="calendar-daily"
                :class="{outside: currentMonth !== day.month}"
            >
                <div class="calendar-day">
                    {{ day.date }}
                </div>
                <div v-for="dayEvent in day.dayEvents" :key="dayEvent.id">
                    <div
                        class="calendar-event"
                        :style="`width:${dayEvent.width}%;background-color:${dayEvent.color}`"
                        draggable="true" >
                        {{ dayEvent.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.content{
  margin:2em auto;
  width:900px;
}
.button-area{
  margin:0.5em 0;
}
.button{
  padding:4px 8px;
  margin-right:8px;
}
.calendar{
  max-width:900px;
  border-top:1px solid #E0E0E0;
  font-size:0.8em;
}
.calendar-weekly{
  display:flex;
  border-left:1px solid #E0E0E0;
  /* background-color: black; */
}
.calendar-daily{
  flex:1;
  min-height:125px;
  border-right:1px solid #E0E0E0;
  border-bottom:1px solid #E0E0E0;
  margin-right:-1px;
}
.calendar-day{
  text-align: center;
}

.calendar-youbi{
  flex:1;
  border-right:1px solid #E0E0E0;
  margin-right:-1px;
  text-align:center;
}

.outside{
  background-color: #f7f7f7;
}

.calendar-event{
  color:white;
  margin-bottom:1px;
  height:25px;
  line-height:25px;
}

</style>