<template>
    <Link :href="linkHref"
        :class="active ? 'text-2xl text-blue-500 font-bold underline' : 'text-xl text-blue-500 hover:underline'">
    <slot />
    </Link>
</template>

<script lang="ts">
export default {
    components: {

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

