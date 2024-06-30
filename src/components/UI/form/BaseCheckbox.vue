<template>
  <div class="flex gap-3 items-start">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      @focus="$emit('cancel-error')"
      class="appearance-none relative min-w-5 h-5 border-2  top-1 checked:after:absolute checked:after:-top-2 checked:after:left-[6px] checked:after:w-3 checked:after:h-5 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-headline checked:after:transorm checked:after:rotate-45"
      :id="uuid"
      :class="{'border-headline': error === '', 'border-brand': error !== ''}"
    />
    <label v-if="label" :for="uuid">{{ label }}</label>
  </div>
  <p v-if="error" class="text-sm text-brand mt-3">
    {{ error }}
  </p>
</template>

<script>
import UniqueID from '../../../UniqueID'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
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
  }
}
</script>
