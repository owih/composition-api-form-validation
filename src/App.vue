<script setup>
import { useForm } from "./use/useForm";

const required = (value) => !!value;
const minLength = (num) => (value) => value.length >= num;

const form = useForm({
  email: {
    value: "",
    validators: {
      required,
    },
  },
  password: {
    value: "",
    validators: {
      required,
      minLength: minLength(8),
    },
  },
});

function submit() {
  alert("Successful");
}
</script>

<template>
  <main>
    <div class="container">
      <form class="form" @submit.prevent="submit">
        <h1>Auth</h1>

        <div class="info">
          <pre>{{ form }}</pre>
        </div>

        <div
          class="form-control"
          :class="{ invalid: form.email.touched && !form.email.valid }"
        >
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email.value"
            @blur="form.email.blur()"
          />
          <small v-if="form.email.touched && !form.email.errors.required">
            Email field is required
          </small>
        </div>

        <div
          class="form-control"
          :class="{ invalid: form.password.touched && !form.password.valid }"
        >
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password.value"
            @blur="form.password.blur()"
          />
          <small v-if="form.password.touched && !form.password.errors.required">
            Password field is required
          </small>
          <small
            v-else-if="form.password.touched && !form.password.errors.minLength"
          >
            Must`t be less then 8. Its just {{ form.password.value.length }}
          </small>
        </div>

        <button class="submit" type="submit" :disabled="!form.valid">
          Submit
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
.form {
  background-color: ghostwhite;
  box-shadow: 4px 4px 8px 0 rgba(255, 255, 255, 0.2);
  font-size: 16px;
  padding: 32px;
  width: 100%;
  border-radius: 8px;
  color: black;
  .form-control {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  .submit {
    padding: 8px 12px;
    font-size: 18px;
    background-color: transparent;
    border: 1px solid #2c3e50;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
      background-color: indianred;
      color: ghostwhite;
      border-color: indianred;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.8;
    }
  }
  input {
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border: 1px solid darksalmon;
    margin: 8px 0;
    font-size: 14px;
    border-radius: 2px;
  }
  label,
  small {
    display: block;
  }
  small {
    color: crimson;
  }
  .info {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    padding: 16px 0;
    margin: 16px 0;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
}
</style>
