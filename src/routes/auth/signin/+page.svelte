<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { errorHandler } from "$helper";
  import Input from "$components/Input.svelte";

  import { isLoggedIn } from "$lib/store/auth";

  // export let form: ActionData;

  let email = "";
  let password = "";

  let signedIn = false;
  // Update the store when the user signs in or out
  $: isLoggedIn.set(signedIn);

  async function login() {
    // $isLoggedIn = true;
    // const user = await getUserDetails(username, password);
    // if (user) {
    //   console.log(user);
    //   $store = user;
    //   if (error) error = "";
    // } else {
    //   error = "Incorrect username and password.";
    //   console.log("Incorrect username and password.");
    // }
  }
</script>

<svelte:head>
  <title>Sign In</title>
</svelte:head>

<div class="wrapper">
  <section class="login">
    <h1>Sign In</h1>
    <!-- <form method="POST" action="?/signIn" -->
    <form method="POST" on:submit|preventDefault={login} use:enhance>
      <div class="row">
        <Input
          placeholder=""
          type="email"
          label="Email"
          autocomplete="true"
          name="email"
        />
      </div>
      <div class="row">
        <Input
          placeholder="******"
          type="password"
          label="Password"
          name="password"
        />
      </div>
      <button>Sign In</button>
    </form>
    <p>Don't have an account? <a href="/auth/signup">Create a new one</a></p>
  </section>
</div>
