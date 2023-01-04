<template>
    <Layout>
        <div>
            <div class="text-5xl text-blue-600">
                Home Page
            </div>
            <div style="margin-top:1000px ;" class="text-xl">
                The current time is {{ time }}.
            </div>
            <Link class="text-blue-500 hover:underline text-2xl" href="/users" preserve-scroll>Refresh</Link>

        </div>
    </Layout>
</template>

<script lang="ts">
import Layout from '../Shared/Layout.vue'
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        Layout, Link
    },
    props: {
        time: String,
    },
}
</script>
