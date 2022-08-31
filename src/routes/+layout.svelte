<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="container">
  <slot />
</main>

<Footer />

<style lang="scss">
  .container {
    width: min(100%, 56.25rem);
    margin-inline: auto;
    padding: 1rem;
  }
</style>
