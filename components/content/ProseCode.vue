<template>
    <div class="container">
        <span v-if="filename" class="filename-text unselectable">
            {{ filename }}
        </span>
        <span v-if="languageText" :style="{ background: languageBackground, color: languageColor }"
            class="language-text unselectable">
            {{ languageText }}
        </span>
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        code?: string;
        language?: string | null;
        filename?: string | null;
        highlights?: Array<number>;
    }>(),
    { code: '', language: null, filename: null, highlights: [] }
);

const languageMap: Record<
    string,
    { text: string; color: string; background: string }
> = {
    vue: {
        text: "vue",
        background: '#42b883',
        color: "white",
    },
    js: {
        text: "JS",
        background: '#f7df1e',
        color: "black",
    },
    java: {
        text: "Java",
        background: "#eb7134",
        color: "white"
    },
    ts: {
        text: "TS",
        background: "#3480eb",
        color: "white"
    },
    html: {
        text: "HTML",
        background: "#17ad50",
        color: "white"
    },
    python: {
        text: "Python",
        background: "#175dad",
        color: "white"
    },
    xml: {
        text: "XML",
        background: "#038594",
        color: "white"
    }
};

const languageText = computed(() =>
    props.language ? languageMap[props.language]?.text : null
);
const languageBackground = computed(() =>
    props.language ? languageMap[props.language]?.background : null
);
const languageColor = computed(() =>
    props.language ? languageMap[props.language]?.color : null
);
</script>

<style scoped>
.container {
    background: #1f2937;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 1em;
    overflow: hidden;
    border-radius: 0.5rem;
}

.bottom-container {
    display: flex;
    justify-content: flex-end;
}

.copy-container {
    display: flex;
}

.copied-text {
    margin-right: 1em;
}

.filename-text {
    position: absolute;
    top: 0;
    left: 1em;
    padding: 0.25em 0.5em;
    color: gray;
    font-size: 10px;
}

.language-text {
    position: absolute;
    top: 0;
    right: 1em;
    padding: 0.25em 0.5em;
    font-size: 14px;
    border-bottom-right-radius: 0.25em;
    border-bottom-left-radius: 0.25em;
}

:slotted(pre) {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding: 1rem;
    line-height: 1.625;
    counter-reset: lines;
}

:slotted(pre code) {
    width: 100%;
    display: flex;
    flex-direction: column;
}

:slotted(pre code .line) {
    display: inline-table;
    min-height: 1rem;
}

:slotted(pre code .line::before) {
    counter-increment: lines;
    content: counter(lines);
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: left;
    color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
    background-color: #363b46;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid red;
}
</style>