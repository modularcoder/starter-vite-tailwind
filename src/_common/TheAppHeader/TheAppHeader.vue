<template>
  <div class="w-full p-4">
    <div class="container mx-auto flex">
      <div class="flex-1">This Is App Header</div>
      <div class="flex-1 text-right">
        <RouterLink to="/" class="NavItem">Home</RouterLink>
        <RouterLink to="/about" class="NavItem">About</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.NavItem {
  @apply text-green-400;

  &:hover {
    @apply underline;
  }
}
</style>