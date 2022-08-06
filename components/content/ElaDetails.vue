<template>
    <div>
        <button
            class="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
            @click="show_slot=!show_slot"
        >
            {{ title }}
        </button>
        <div v-show="show_slot">
            <Markdown :use="$slots.default" unwrap="p" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "查看详情"
    },
    show_slot: {
        type: Boolean,
        default: false
    }
});
</script>