import { ref, reactive, watch } from "vue";

export function useField(field) {
  const valid = ref(true);
  const value = ref(field.value);
  const errors = reactive({});
  const touched = ref(false);

  const valueProcess = (value) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      errors[name] = field.validators[name](value);
      if (!errors[name]) valid.value = false;
    });
  };

  watch(value, valueProcess);
  valueProcess(value.value);

  return {
    value,
    valid,
    errors,
    touched,
    blur: () => {
      touched.value = true;
    },
  };
}
