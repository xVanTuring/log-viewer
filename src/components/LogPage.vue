<script lang="ts" setup>
import { reactive } from 'vue';
import LogItem from './LogItem.vue';
const state = reactive<{
    logList: Array<any>;
}>({
    logList: []
});
const ws = new WebSocket("ws://127.0.0.1:8080");
ws.onmessage = (event: MessageEvent<string>) => {
    state.logList.unshift(JSON.parse(event.data));
};
</script>
<template>
    <el-timeline class="timeline">
        <TransitionGroup name="slide" tag="div">
            <LogItem :log-item="item" v-for="item in state.logList" :key="item.time"/>
        </TransitionGroup>
    </el-timeline>
</template>
<style>
.list .log-item {
    margin-bottom: 14px;
}

.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
.slide-leave-active {
  position: absolute;
}

</style>