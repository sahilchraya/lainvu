<template>
    <nav class="mt-6">
        <ul class="list-disc">

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
