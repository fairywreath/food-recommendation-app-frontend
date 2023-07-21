<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { errorHandler } from "$helper";
  //   import Cover from "$components/elements/Cover.svelte";
  //   import Artist from "$components/elements/Artist.svelte";

  export let form: ActionData;
  //   let group = "artist";
</script>

<div class="container">
  <div class="max-w-md">
    <form method="POST" use:enhance class="space-y-2">
      <div>
        <label for="search" class="sr-only">Search</label>
        <input
          id="search"
          type="text"
          class="form-input"
          placeholder="Search Restaurant"
          name="q"
        />
        {#if errorHandler(form, "q")}
          {#each form.errors["q"] as message}
            <small class="text-primary">{message}</small>
          {/each}
        {/if}
      </div>

      <div>
        {#if errorHandler(form, "qType")}
          {#each form.errors["qType"] as message}
            <small class="text-primary">{message}</small>
          {/each}
        {/if}
      </div>
    </form>
  </div>
</div>
