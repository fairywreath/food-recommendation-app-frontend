<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ main_recommendations } = data);
</script>

<div class="wrapper">
  {#await main_recommendations}
    Loading recommendations...
  {:then value}
    {main_recommendations}
    <!-- {#each main_recommendations.restaurants as restaurant} -->
    <!-- <div>{restaurant.name}</div> -->
    <!-- <div>{restaurant.address}</div> -->
    <!-- <br /> -->
    <!-- {/each} -->
    <!-- {:catch} -->
    <!-- {error.message} -->
  {/await}
</div>
