<template>
  <div class="container mt-5">
    <h1 class="text-center">Toggle API</h1>
    <div class="d-flex justify-content-center mt-4">
      <button class="btn btn-primary" @click="toggleValue">Toggle Value</button>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <p>Current Value: {{ currentValue }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      currentValue: null,
    };
  },
  methods: {
    async fetchCurrentValue() {
      try {
        const response = await axios.get("/api/");
        this.currentValue = response.data.access;
      } catch (error) {
        console.error("Error fetching current value:", error);
      }
    },
    async toggleValue() {
      try {
        const newValue = this.currentValue === 1 ? 0 : 1;
        const response = await axios.post("/api/set", {
          value: newValue,
        });
        this.currentValue = response.data.value;
      } catch (error) {
        console.error("Error toggling value:", error);
      }
    },
  },
  mounted() {
    this.fetchCurrentValue();
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
