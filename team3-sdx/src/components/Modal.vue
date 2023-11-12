html
<template>
  <div>
    <button @click="openModal">Modal öffnen</button>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{data.title}}</h2>
        <p>{{ data.co2 }}</p>
        <p>{{data.diversity}}</p>
        <p>{{data.handicapped}}</p>
        <p>{{data.companyculture}}</p>
        <p>{{data.environment}}</p>
        <p>{{data.community}}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
