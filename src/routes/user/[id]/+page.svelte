<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ user, reviews } = data);
</script>

<div class="container py-4 space-y-4">
  <div>{user.username}</div>
  <div>{user.email}</div>
  <h1>Recent reviews</h1>
  <!-- {reviews.reviews} -->
  {#each reviews.reviews as review}
    <div>{review.restaurant_id}</div>
    <div>{review.review_text}</div>
    <div>{review.date}</div>
    <br />
  {/each}
</div>
