<script>
    export let restaurant;

    import GoogleMap from '../../../lib/components/GoogleMap.svelte';

    // Function to fetch the restaurant object from the API
  async function fetchRestaurant() {
    try {
        //need to dynamically get restaurant ID later
      const response = await fetch('curl --location http://localhost:8000/restaurants/0/details');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  }

  // On component mount, fetch the restaurant object from the API
  async function getRestaurantData() {
    const data = await fetchRestaurant();
    if (data) {
      restaurant = data;
    }
  }

  // Fetch the restaurant data when the component mounts
  onMount(async () => {
    await getRestaurantData();
  });
</script> 
  
  <main>
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
    <br>
    <br>
    <!-- <GoogleMap latitude={37.7749} longitude={-122.4194} /> -->
    <GoogleMap latitude={restaurant.latitude} longitude={restaurant.longitude} />
  </main>