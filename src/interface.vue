<template>
	<div width="100%">
		<iframe :src="url" title="MAP TEST" width="100%" height="600px"></iframe>
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
    },
	
    setup(props) {
        const values = inject("values"); // gets ID

        return {
            url: computed(() => render(props.url, values.value)),
        };
    },
});
</script>