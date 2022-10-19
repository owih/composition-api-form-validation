<script setup>


function submit() {
  console.log('submit')
}
</script>

<template>
  <main>
    <div class="container">
      <form class="form" @submit.prevent="submit">
        <h1>Auth</h1>

        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email">
          <small>Email field is required</small>
        </div>

        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password">
          <small>
          </small>
        </div>

        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
.form {
  font-size: 16px;
  border: 1px solid ghostwhite;
  padding: 32px;
  width: 100%;
  border-radius: 4px;
  .form-control {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  .submit {
    padding: 8px 12px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #f8f8f8;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  }
  input {
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border: 1px solid darksalmon;
    margin: 8px 0;
    font-size: 14px;
  }
  label, small {
    display: block;
  }
}
</style>
