<script>
  import "../app.scss";
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<div class="flex flex-col h-screen">
  <Navbar />
  <div class="flex-grow mt-20"><slot /></div>
  <Footer />
</div>

<style lang="postcss">
</style>
