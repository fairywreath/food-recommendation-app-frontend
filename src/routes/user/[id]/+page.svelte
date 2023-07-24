<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ user, reviews } = data);
</script>

<div class="container py-4 space-y-4">
  <div>{user.username}</div>
  <div>{user.email}</div>
  <div>ID: {user.id}</div>
  <h1>Recent reviews</h1>
  <!-- {reviews.reviews} -->
  {#each reviews.reviews as review}
    <a href="/restaurant/{review.restaurant_id}">{review.restaurant_id}</a>
    <div>{review.review_text}</div>
    <div>{review.date}</div>
    <br />
  {/each}
</div>
