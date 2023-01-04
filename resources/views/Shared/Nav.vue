<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li>
                <Link class="text-blue-500 hover:underline text-2xl" href="/">Home</Link>
            </li>
            <li>
                <Link class="text-blue-500 hover:underline text-2xl" href="/users">Users</Link>
            </li>
            <li>
                <Link class="text-blue-500 hover:underline text-2xl" href="/settings">Settings</Link>
            </li>
            <li>
                <Link class="text-blue-500 hover:underline text-2xl" href="/logout" :data="{ 'foo': 'bar' }"
                    method="post" as="button">
                Logout
                </Link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
        Link,
    },
}
</script>
