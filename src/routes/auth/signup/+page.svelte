<script>
  //   import { goto } from "$app/navigation";
  import Input from "$components/Input.svelte";
  //   import { auth, isLoggedIn } from "$lib/utils/authStore";

  let email = "";
  let password = "";
  let name = "";

  function submit() {
    // $auth = { name, email, password };
    // $isLoggedIn = true;
    // goto("/");
  }
</script>

<svelte:head>
  <title>Sign Up | Bibliophile</title>
</svelte:head>

<section class="signup wrapper">
  <h1>Create a new account</h1>
  <form on:submit|preventDefault={submit}>
    <div class="row">
      <Input type="text" placeholder="" label="Username" bind:value={name} />
    </div>
    <div class="row">
      <Input type="email" placeholder="" label="Email" bind:value={email} />
    </div>
    <div class="row">
      <Input
        placeholder="*******"
        type="password"
        label="Password"
        bind:value={password}
        minlength="6"
      />
    </div>
    <button>Create account</button>
  </form>
  <p>Already have an account? <a href="/auth/signin">Sign in</a></p>
</section>
