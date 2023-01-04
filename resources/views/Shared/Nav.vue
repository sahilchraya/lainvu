<template>
    <nav class="ml-6">
        <ul class="flex list-disc space-x-5 list-inside">

            <li>
                <NavLink linkHref="/" :active="$page.component === 'Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink linkHref="/users" :active="$page.component === 'Users'">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink linkHref="/settings" :active="$page.component === 'Settings'">
                    Settings
                </NavLink>
            </li>

        </ul>
    </nav>
</template>

<script lang="ts">
import NavLink from './NavLink.vue'
export default {
    components: {
        NavLink
    },
}
</script>
