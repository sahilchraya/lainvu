<template>
    <Link :href="linkHref"
        :class="active ? 'text-2xl text-blue-500 font-bold underline' : 'text-xl text-blue-500 hover:underline'">
    <slot />
    </Link>
</template>

<script lang="ts">
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        Link,
    },
    props: {
        linkHref: {
            type: String,
            required: true,
        },
        active: Boolean,
    },
}
</script>

