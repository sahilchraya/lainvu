<template>
    <section class="p-6 bg-slate-300">
        <header class="flex justify-between">
            <div class="flex items-center justify-center">
                <h1 class="font-bold text-2xl text-blue-600">
                    My Test App
                </h1>
                <h1 class="text-lg ml-4">
                    Welcome Back, {{ name }}
                </h1>
            </div>

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
    //TODO To get data from the Inertia Middleware
    computed: {
        name() {
            return this.$page.props.auth.user.name;
        }
    }

}
</script>

<style scoped>

</style>
