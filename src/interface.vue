<template>
    <div>
        <p>{{ iframeTitle }}</p>
        <br><p>{{ iframeClassName }}</p>
        <iframe :src="url" :class=iframeClassName :title=iframeTitle :height="height" :width=frameWidth></iframe>
    </div>
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
        collection: {
            type: String,
            default: null,
        },
        field: {
            type: String,
            default: null,
        }
    },

    data() {
        return {
            iframeTitle: this.field + " content",
            iframeClassName: "iframeInterface " + this.collection + this.field,
        };
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