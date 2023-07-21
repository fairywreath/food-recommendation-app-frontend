<script lang="ts">
  import { generateSrcset } from "$helper";

  $: ({
    name,
    id,
    address,
    cuisine_genres,
    dietary_preferences,
    spending_budget,
    average_rating,

    // images,
  } = $$restProps);
</script>

<div class="bg-primary-dark dark:bg-primary-light p-3 rounded">
  <a
    href="/restaurant/{id}"
    class="group space-y-2 relative"
    aria-label="Album detail page"
  >
    <div class="w-auto rounded overflow-hidden relative">
      {#if name} <span class="sr-only">{name}</span>{/if}
      <div
        class="group-hover:bg-primary-light mix-blend-multiply transition-all absolute inset-0"
      />
      <!-- <img alt="Albums" srcset={generateSrcset(images)} /> -->
    </div>
    {#if name}
      <div
        class="relative truncate w-32 xs:w-48 sm:w-32 font-bold text-sm text-inverse"
      >
        {name}
      </div>
    {/if}
  </a>
  <div class="text-md sm:text-xs">
    {address}
  </div>
</div>
