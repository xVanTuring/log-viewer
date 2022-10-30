<script lang="ts" setup>
import type { BaseLogItem } from '@/model/BaseLogItem';
import type { NestjsPinoItem } from '@/model/NestPinoItem';
import { dayjs } from 'element-plus';
import { computed, reactive } from 'vue';
import { format as MutipleFormat } from '@/model/MutipleFormatter';
const props = defineProps<{
    logItem: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>;
}>();

const state = reactive<{
    jsonStatus: Record<string, boolean>;
}>({
    jsonStatus: {}
});

const formatedArr = computed(() => MutipleFormat(props.logItem));
const jsonToggles = computed(() => {
    return formatedArr.value.jsonList.map((i) => i.title);
});
const filteredJsonList = computed(() => {
    return formatedArr.value.jsonList.filter((i) => {
        return state.jsonStatus[i.title];
    });
});
</script>

<template>
    <el-timeline-item :timestamp="dayjs(props.logItem.time).format()" placement="top">
        <el-card class="log-item">
            <el-container>
                <el-aside width="120px">
                    <div class="left-info">
                        <el-tag v-for="tag in formatedArr.tags" badge-type="info" :type="tag.type">
                            {{ tag.title }}
                        </el-tag>
                    </div>
                </el-aside>
                <el-main :style="{ padding: 0, paddingLeft: '8px' }">
                    <div class="text_line" :class="{ success: false }" v-for="title in formatedArr.titles">{{ title }}</div>

                    <div class="detail_line" v-for="body in formatedArr.bodys">
                        {{ body }}
                    </div>
                    <el-checkbox v-model="state.jsonStatus[key]" :label="`Show ${key}`" size="large"
                        v-for="key in jsonToggles" />
                    <json-viewer v-for="item in filteredJsonList" :value="item.data">
                    </json-viewer>
                </el-main>
            </el-container>

        </el-card>
    </el-timeline-item>
</template>
<style scoped>
.log-item {
    width: 100%;
    padding: 8px;
    border-radius: 10px;
}

.left-info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
}

.left-info * {
    margin-bottom: 4px;
}

.el-row {
    margin-bottom: 8px;
}

.log_text {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.text_line {
    background-color: var(--el-color-info);
    padding: 6px 20px;
    border-radius: 6px;
    line-height: 100%;
    color: white;
    margin-bottom: 8px;
    font-family: 'JetBrains Mono', monospace;

}

.success {
    background-color: var(--el-color-success)
}

.info {
    background-color: var(--el-color-info);
}

.warning {
    background-color: var(--el-color-warning);
}

.error {
    background-color: var(--el-color-error);
}

.detail_line {
    background-color: rgb(182, 182, 182);
    padding: 6px 20px;
    border-radius: 6px;
    color: white;
    overflow: auto;
    white-space: pre;
    font-family: 'JetBrains Mono', monospace;
}
</style>