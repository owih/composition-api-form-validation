import { reactive, computed } from "vue";
import { useField } from "./useField";

export function useForm(init) {
  const form = reactive({});
  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);
  }

  form.valid = computed(() => {
    return Object.keys(form)
      .filter((val) => val !== "valid")
      .reduce((acc, key) => {
        return acc && form[key].valid;
      }, true);
  });

  return form;
}
