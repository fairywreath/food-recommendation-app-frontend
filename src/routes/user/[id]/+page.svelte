<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ user } = data);
</script>

<div class="container py-4 space-y-4">
  <div>{user.username}</div>
  <div>{user.email}</div>
</div>
