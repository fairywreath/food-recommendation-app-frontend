<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { errorHandler } from "$helper";

  import Input from "$components/Input.svelte";

  export let form: ActionData;

  let email = "";
  let password = "";

  function submit() {
    // if (email === $auth.email && password === $auth.password) {
    //   goto("/");
    //   isLoggedIn.set(true);
    //   toast.success(`Wecome back ${$auth.name}`);
    // } else {
    //   toast.error("Invalid Credentials, try again");
    // }
  }
</script>

<svelte:head>
  <title>Sign In | EatsRadar</title>
</svelte:head>

<div class="wrapper">
  <section class="login">
    <h1>Sign In</h1>
    <form on:submit|preventDefault={submit}>
      <div class="row">
        <Input placeholder="" type="email" label="Email" autocomplete="true" />
      </div>
      <div class="row">
        <Input placeholder="******" type="password" label="Password" />
      </div>
      <button>Sign In</button>
    </form>
    <p>Don't have an account? <a href="/auth/signup">Create a new one</a></p>
  </section>
</div>
