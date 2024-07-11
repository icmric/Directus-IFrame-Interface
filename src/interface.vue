<template>
	<div width="100%">
		<iframe :src="url" title="IFrame" width="100%" :height="height + 'px'"></iframe>
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
        }
    },
	
    setup(props) { 
        const values = inject("values"); // gets ID
        return {
            url: computed(() => render(props.url, values.value)),
        };
    },
});
</script>