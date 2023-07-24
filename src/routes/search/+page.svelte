<script lang="ts">
  import type { ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { errorHandler } from "$helper";

  import MultiSelect from "svelte-multiselect";

  //   import Cover from "$components/elements/Cover.svelte";
  //   import Artist from "$components/elements/Artist.svelte";

  export let form: ActionData;
  //   let group = "artist";

  function join_selections(selections: string[]) {
    if (selections.length === 1) return selections[0];
    return `${selections.slice(0, -1).join(", ")} and ${
      selections[selections.length - 1]
    }`;
  }

  enum DietaryPreference {
    Vegan = "Vegan",
    Vegetarian = "Vegetarian",
    GlutenFree = "Gluten-Free",
    DairyFree = "Dairy-Free",
    Halal = "Halal",
    NutFree = "Nut-Free",
  }
  const dietaryPreferences: string[] = Object.values(DietaryPreference);
  let selectedDietaryPreferences: string[] = [];

  enum SpendingBudget {
    VeryLow = "Very low",
    Low = "Low",
    Medium = "Medium",
    High = "High",
    VeryHigh = "Very high",
  }
  const spendingBudgets: string[] = Object.values(SpendingBudget);
  let selectedBudgets: string[] = [];

  enum CuisineGenre {
    THAI = "Thai",
    VIETNAMESE = "Vietnamese",
    SOUTHEAST_ASIAN = "Southeast Asian",
    KOREAN = "Korean",
    CHINESE = "Chinese",
    JAPANESE = "Japanese",
    INDIAN = "Indian",
    ITALIAN = "Italian",
    FRENCH = "French",
    AMERICAN = "American",
    MEXICAN = "Mexican",
    SOUTH_AMERICAN = "South American",
    MIDDLE_EASTERN = "Middle Eastern",
    MEDITERRANEAN = "Mediterranean",
  }
  const cuisineGenres: string[] = Object.values(CuisineGenre);
  let selectedCuisines: string[] = [];
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

    <!-- Recommendation search -->
    <h1>Get Recommendations</h1>

    <h2>Dietary Preferences</h2>
    {#each dietaryPreferences as dietary_preference}
      <label>
        <input
          type="checkbox"
          bind:group={selectedDietaryPreferences}
          value={dietary_preference}
        />
        {dietary_preference}
      </label>
    {/each}

    <h2>Spending Budget</h2>
    {#each spendingBudgets as budget}
      <label>
        <input type="checkbox" bind:group={selectedBudgets} value={budget} />
        {budget}
      </label>
    {/each}
  </div>

  <MultiSelect
    id="cuisine_genre_params"
    options={cuisineGenres}
    placeholder="Take your pick..."
    bind:selectedCuisines
    let:idx
    let:option
  />
</div>
