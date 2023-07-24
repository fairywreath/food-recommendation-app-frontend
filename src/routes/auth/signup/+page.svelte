<script>
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  import Input from "$components/Input.svelte";
  import { auth, isLoggedIn } from "$lib/store/auth";

  // Can also grab ActionData here and subscribe to the store variables
  // export let form: ActionData;

  const onCreateUserSubmit = () => {
    return ({ result, update }) => {
      if (result.type === "success") {
        console.log(result.data);
        $isLoggedIn = true;
        $auth.username = result.data.username;
        $auth.email = result.data.email;
        $auth.userId = result.id;
        goto("/");
      } else {
        // XXX TODO: Update UI component
      }
    };
  };
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

<section class="wrapper">
  <h1>Create a new account</h1>
  <form method="POST" action="?/create" use:enhance={onCreateUserSubmit}>
    <div class="row">
      <Input type="text" placeholder="" label="Username" name="name" />
    </div>
    <div class="row">
      <Input type="email" placeholder="" label="Email" name="email" />
    </div>
    <div class="row">
      <Input
        placeholder="*******"
        type="password"
        label="Password"
        minlength="6"
        name="password"
      />
    </div>
    <button>Create account</button>
  </form>
  <p>Already have an account? <a href="/auth/signin">Sign in</a></p>
</section>
