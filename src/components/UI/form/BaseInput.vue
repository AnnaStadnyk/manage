
<script>
import UniqueID from '../../../UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: null
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      uuid: UniqueID().getID()
    }
  },
  computed: {
    getPlaceholder() {
      if (this.placeholder) return this.placeholder
      else return `Enter Your ${this.label} ...`
    }
  }
}
</script>

<template>
  <label :for="uuid" v-if="label" class="block mb-3 lg:mb-4 text-sm text-headline font-semibold">{{
    label
  }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="getPlaceholder"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="$emit('cancel-error')"
    :id="uuid"
    class="w-full rounded-full outline-0 border-2 py-3 xl:py-3.5 px-8 text-headline placeholder:text-primary focus:border-brand transition duration-300 ease-in"
    :class="{'border-brand': error !== ''}"
  />
  <p v-if="error" class="text-sm text-brand mt-3">
    {{ error }}
  </p>
</template>
