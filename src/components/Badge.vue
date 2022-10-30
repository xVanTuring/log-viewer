<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
    title: String,
    badgeType: String,
    hover: String
});
const type = computed(() => {
    if (!props.badgeType) {
        return 'info';
    }
    const dict: Record<string, string> = {
        debug: 'success',
        error: 'danger',
        warn: 'warning'
    };
    return dict[props.badgeType] ?? 'success';
});
</script>

<template>
    <el-tag size="large" :type="type">
        {{ props.title }}
    </el-tag>
</template>
<style scoped>
.badge-item {
    /* display: inline-block; */
    padding: 4px 10px;
    min-width: 86px;
    background-color: #000000;
    border-radius: 6px;
    color: white;
    overflow: hidden;
    text-align: center;
}

.level {
    padding: 10px 10px;
    border-radius: 9px;
}

.debug {
    background-color: #0E5B74;
}

.error {
    background-color: #E92E2E;
}

.warn {
    background-color: #E9B42E;
}
</style>