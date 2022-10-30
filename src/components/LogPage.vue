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
    state.logList.push(JSON.parse(event.data));
};
</script>
<template>
    <el-timeline>
        <LogItem :log-item="item" v-for="item in state.logList" />
    </el-timeline>
</template>
<style>
.list .log-item {
    margin-bottom: 14px;
}
</style>