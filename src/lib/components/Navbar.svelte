<script lang="ts">
  import { isLoggedIn, auth } from "$lib/store/auth";
</script>

<div class="py-5 bg-gray-light dark:bg-gray-dark fixed inset-x-0 z-50">
  <div class="container flex items-center justify-between">
    <a
      href="/"
      class="text-2xl font-extrabold tracking-tight ring-2 px-2 py-1 ring-black dark:ring-primary hover:ring-primary"
      >EatsRadar</a
    >

    <!-- <a
      href="/user/0"
      class="text-2xl font-extrabold tracking-tight ring-2 px-2 py-1 ring-black dark:ring-primary hover:ring-primary"
      >DumbUser</a
    >
    <a
      href="/restaurant/0"
      class="text-2xl font-extrabold tracking-tight ring-2 px-2 py-1 ring-black dark:ring-primary hover:ring-primary"
      >DumbRestaurant</a
    > -->
    <div class="flex items-center space-x-4 sm:space-x-6">
      <a href="/search" aria-label="Restaurant Search"
        ><i class="gg-search" /></a
      >

      {#if $isLoggedIn}
        <div>Hello {$auth.username}</div>
        <!-- <div>Your ID: {$auth.userId}</div> -->
        <a href="/my/profile">My Profile</a>
      {:else}
        <a href="/auth/signin">Sign In</a>
      {/if}

      <!-- <SlectTheme /> -->
    </div>
  </div>
</div>
