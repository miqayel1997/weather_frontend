<template>
    <div
        class="absolute inset-y-0 z-10 w-1/3 bg-white py-5 px-7 shadow-sidebar transition-all duration-500"
        :class="[show ? 'left-0' : '-left-1/3']"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
};
</script>
