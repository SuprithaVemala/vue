<template>
  <div @click="closeModal" class="modal" ref="modal">
    <div class="modal-wrap" ref="modalWrap">
      <label for="city-name">Enter Location:</label>
      <input
        type="text"
        name="city-name"
        placeholder="Search By City Name"
        v-model="city"
      />
      <p class="error">{{ this.error }}</p>
      <button @click="addCity">Add</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { store } from "../firebase/firebaseinit";
export default {
  name: "modal",
  data() {
    return {
      city: "",
      error: "",
    };
  },
  methods: {
    closeModal(e) {
      if (e.target === this.$refs.modal) {
        this.$emit("close-modal");
      }
    },
    async addCity() {
      if (this.city === "") {
        this.error = "Plase provide the city name";
      } else {
        const docRef = await addDoc(collection(store, "cities"), {
          name: this.city,
        });
        console.log(docRef);
        this.$emit("close-modal");
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  text-align: center;
}
.modal {
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
label {
  color: #fff;
}
.modal-wrap {
  max-width: 500px;
  border-radius: 8px;
  width: 80%;
  padding: 20px;
  background-color: #31363d;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input {
  color: #fff;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #fff;
  padding: 6px 4px;
  margin: 10px 0 20px;
  width: 100%;
}
input:hover {
  outline: none;
}
button {
  background-color: #222325;
  color: #fff;
  padding: 6px 20px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
