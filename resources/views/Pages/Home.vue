<template>
    <div class="text-3xl text-green-600">
        This is the welcome page for {{ name }}.

    </div>
    <div class="text-3xl text-green-600">
        In this course we will learn the following frameworks:
        <ul class="text-blue-500">
            <li v-for="framework of frameworks" v-text="framework">
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        name: String,
        frameworks: Array,
    }
}
</script>
