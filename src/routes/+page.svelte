<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ main_recommendations } = data);
</script>

<div class="wrapper">
  <h1>Today's Recommendations</h1>
  {#await main_recommendations}
    Loading recommendations...
  {:then recommendations}
    {#each recommendations.restaurants as restaurant}
      <a href="restaurant/{restaurant.id}">{restaurant.name}</a>
      <div>{restaurant.address}</div>
      <br />
    {/each}
  {/await}
</div>
