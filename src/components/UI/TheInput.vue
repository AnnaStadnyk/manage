<script>
import UniqueID from '../../UniqueID'
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

        //   error: {
        //     type: String,
        //     default: ''
        //   }
    },
    data() {
        return {
            uuid: ''
        }
    },
    computed:{
        placeholder(){
            return `Enter Your ${this.label} ...`
        }
    }
    // setup () {
    //   const uuid = UniqueID().getID()
    //   return {
    //     uuid
    //   }
    // }
}
</script>


<template>
    <label :for="uuid" v-if="label" class="block mb-3 lg:mb-4 text-sm text-headline font-semibold">{{ label }}</label>
    <input v-bind="$attrs" :value="modelValue" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)" 
        class="w-full rounded-full outline-0 border-2 py-3 xl:py-3.5 px-8 text-headline placeholder:text-primary focus:border-brand transition duration-300 ease-in">
    <!-- <p
      v-if="error"
      class="errorMessage"
      :id="`${uuid}-error`"
      aria-live="assertive"
    >
      {{ error }}
    </p> -->
</template>
