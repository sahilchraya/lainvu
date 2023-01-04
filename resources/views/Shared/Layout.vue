<template>
    <section class="p-6 bg-slate-300">
        <header class="flex justify-between">
            <h1 class="font-bold text-2xl text-blue-600">
                My Test App
            </h1>
            <Nav />
        </header>
    </section>
    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
    <!-- Footer goes here -->
</template>

<script lang="ts">
import Nav from './Nav.vue'
export default {
    components: {
        Nav
    },
}
</script>

<style scoped>

</style>
