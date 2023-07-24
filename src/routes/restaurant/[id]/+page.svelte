<script lang="ts">
  import type { PageData } from "./$types";
  import GoogleMap from "../../../lib/components/GoogleMap.svelte";

  export let data: PageData;

  $: ({ restaurant, reviews } = data);
</script>

<div class="wrapper">
  <h1>Restaurant Information</h1>
  <table>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>{restaurant.name}</td>
      </tr>
      <tr>
        <td>Address:</td>
        <td>{restaurant.address}</td>
      </tr>
      <tr>
        <td>Latitude:</td>
        <td>{restaurant.latitude}</td>
      </tr>
      <tr>
        <td>Longitude:</td>
        <td>{restaurant.longitude}</td>
      </tr>
    </tbody>
  </table>
  <br />
  <br />

  <br />

  <h1>Recent Reviews</h1>
  {#await reviews}
    Loading reviews...
  {:then restaurant_reviews}
    {#each restaurant_reviews.reviews as review}
      <a href="/user/{review.user_id}">{review.user_id}</a>
      <div>{review.review_text}</div>
      <div>{review.date}</div>
      <!-- <div>Review id: {review.id}</div> -->

      <form method="POST" action="?/deleteReview">
        <input name="reviewId" class="" />
        <button>Delete</button>
      </form>

      <br />
    {/each}
  {/await}

  <br />

  <h1>Add a review</h1>
  <form method="POST" action="?/createReview">
    <div>User ID</div>
    <input name="userId" class="" />
    <div>Review text</div>
    <input
      name="reviewText"
      class="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
    />
    <button>Submit</button>
  </form>
</div>

<!-- XXX TODO: Page is basically unreloadable with this component, need fix -->
<GoogleMap latitude={restaurant.latitude} longitude={restaurant.longitude} />
