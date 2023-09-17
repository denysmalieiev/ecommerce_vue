<script setup>
import { inject } from "vue";
import { useForm, ErrorMessage, Form, Field } from "vee-validate";
import * as yup from "yup";

import TheContainer from "../components/TheContainer.vue";

const text = inject("text");
const counter = inject("counter");

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

// Validation, or use `yup` or `zod`
// function required(value) {
//   return value ? true : 'This field is required';
// }

// const { defineInputBinds, handleSubmit, errors,...reset } = useForm({
//   validationSchema: {
//     field: required,
//   },
// });

// console.log("reset: ",reset)

// const field = defineInputBinds('field');
// const name=defineInputBinds('')

// Submit handler
const onSubmit = values => {
  // Submit to API
  console.log(values);
};
</script>

<template>
  <div>
    <TheContainer>
      <h2>About View</h2>
      <h2>Text: {{ text }}</h2>
      <h2>Counter : {{ counter }}</h2>
      <Form :validation-schema="schema" @submit="onSubmit">
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <button>Submit</button>
      </Form>
    </TheContainer>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-bottom: 40px;
}
</style>
