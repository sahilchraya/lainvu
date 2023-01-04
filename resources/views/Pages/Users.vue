<template>
    <div class="text-5xl text-blue-600">
        Users Page
    </div>
    <Nav />
    <div style="margin-top:1000px ;" class="text-xl">
        The current time is {{ time }}.
    </div>
    <Link class="text-blue-500 hover:underline text-2xl" href="/users" preserve-scroll>Refresh</Link>
</template>

<script lang="ts">
import Nav from '../Shared/Nav.vue'
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        Nav, Link
    },
    props: {
        time: String,
    },
}
</script>
