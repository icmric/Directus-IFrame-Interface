<template>
	<iframe :src="url" class="iframe" title="IFrame" :height="height" :width="frameWidth"></iframe>
</template>

<script>
import { defineComponent, inject, computed } from "vue";
import { render } from "micromustache";

export default defineComponent({
    emits: ["input"],
    props: {
        url: {
            type: String,
            default: null,
        },
        height: {
            type: Number,
            default: 600,
        },
        // 'width' seems to aready be used elsewhere??
        frameWidth: {
            type: Number,
            default: 800,
        },
    },
	
    setup(props) { 
        const values = inject("values"); // gets ID
        return {
            url: computed(() => render(props.url, values.value)),
        };
    },
});
</script>

<style scoped>
    .iframe {
        border: none;
        border-radius: 6px;
    }
</style>