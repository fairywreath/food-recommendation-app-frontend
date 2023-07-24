<script lang="ts">
  import { IconAt, IconLock, IconUser, IconSearch } from "@tabler/icons-svelte";

  export let type = "";
  export let placeholder = "";
  export let value = "";
  export let label = "";
  export let minlength = 0;
  export let autocomplete = "false";

  function chooseIcon() {
    switch (type) {
      case "email":
        return IconAt;
      case "password":
        return IconLock;
      case "text":
        return IconUser;
      case "search":
        return IconSearch;
      default:
        return null;
    }
  }

  function typeAction(e: any) {
    e.type = type;
  }

  const Icon = chooseIcon();
</script>

<label for="email">{label}</label>
<div class="input">
  {#if Icon}
    <div class="icon"><Icon size={20} /></div>
  {/if}
  <input
    use:typeAction
    bind:value
    {placeholder}
    required
    {minlength}
    {autocomplete}
  />
</div>
