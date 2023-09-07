<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Homepage</h1>
    </div>
  </section>
</template>

<script>
import LandingPage from "./LandingPage.vue";
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

export default {
  name: "IndexPage",
  components: { Login, LandingPage, SignUp },
};
</script>
<style></style>
