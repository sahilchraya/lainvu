<template>

    <div>
        <div class="text-5xl text-blue-600">
            Users Page
        </div>
        <div style="margin-top:1000px ;" class="text-xl">
            The current time is {{ time }}.
        </div>
        <Link class="text-blue-500 hover:underline text-2xl" href="/users" preserve-scroll>Refresh</Link>
    </div>

</template>

<script lang="ts">
import Layout from '../Shared/Layout.vue'
export default {
    layout: Layout,
    props: {
        time: String,
    },
}
</script>
