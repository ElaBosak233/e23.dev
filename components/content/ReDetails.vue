<template>
    <div>
        <button
            :class="clazz"
            @click="open=!open"
        >
            {{ title }}
        </button>
        <div v-show="open">
            <Markdown :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "查看详情"
    },
    open: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "green"
    }
});

const clazz = computed(() =>
    switch_color()
);

function switch_color() {
    switch (props.color) {
        // 绿色
        case "green":
            return "min-w-full text-left px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80";
        // 蓝色
        case "blue":
            return "min-w-full text-left px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
        // 橙色
        case "orange":
            return "min-w-full text-left px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80";
    }
}

</script>