<script>
import BaseInput from '@/components/UI/form/BaseInput.vue'
import BaseCheckbox from '@/components/UI/form/BaseCheckbox.vue'
import DropDown from '@/components/UI/form/DropDown.vue'

export default {
  components: {
    BaseInput,
    BaseCheckbox,
    DropDown
  },
  props: ['show'],
  data() {
    return {
      contact: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        department: { id: 1, name: 'Marketing', contact: 'Durward Reynolds' },
        privacy: false
      },
      errors: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        privacy: false
      },
      departments: [
        { id: 1, name: 'Marketing', contact: 'Durward Reynolds' },
        { id: 2, name: 'HR', contact: 'Kenton Towne' },
        { id: 3, name: 'Sales', contact: 'Therese Wunsch' },
        { id: 4, name: 'Finance', contact: 'Benedict Kessler' },
        { id: 5, name: 'Customer service', contact: 'Katelyn Rohan' }
      ]
    }
  },
  emits: ['close-contact'],
  methods: {
    closeContact(event) {
      const content = document.querySelector('#content')
      if (!content.contains(event.target)) {
        this.$emit('close-contact')
      }
    },
    saveContact() {
      this.$emit('close-contact')
    }
  }
}
</script>

<template>
  <Teleport to="body">
    <section class="">
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition-all duration-300 ease-out"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-to-class="opacity-0"
      >
        <div v-if="show" class="w-full min-h-screen bg-white/80 fixed top-0 left-0 z-50"></div>
      </Transition>

      <Transition
        enter-from-class="opacity-0 scale-90"
        enter-active-class="transition-all duration-300 ease-out"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          v-if="show"
          @click="closeContact"
          class="fixed top-0 left-0 h-screen w-full z-50 overflow-y-auto"
        >
          <div class="container min-h-full py-16 flex place-items-center">
            <div
              id="content"
              class="max-w-5xl w-full mx-auto p-8 lg:p-10 bg-brand-light rounded-2xl"
            >
              <h2
                class="text-3xl text-headline font-semibold text-center xl:text-4xl/[3rem] mb-8 xl:mb-10"
              >
                Contact Information
              </h2>
              <form
                class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
                @submit.prevent="saveContact"
              >
                <div>
                  <BaseInput
                    v-model.trim="contact.name"
                    label="First Name"
                    type="text"
                    :error="errors.name"
                  ></BaseInput>
                </div>
                <div>
                  <BaseInput
                    v-model.trim="contact.surname"
                    label="Last Name"
                    type="text"
                  ></BaseInput>
                </div>
                <div>
                  <BaseInput v-model="contact.phone" label="Mobile Phone" type="tel"></BaseInput>
                </div>
                <div>
                  <BaseInput v-model.trim="contact.email" label="E-mail" type="email"></BaseInput>
                </div>
                <div>
                  <DropDown v-model="contact.department" :items="departments" label="Department">
                  </DropDown>
                </div>
                <div class="flex items-end">
                  <BaseCheckbox
                    v-model="contact.privacy"
                    label="I Agree to Terms and Conditions and Privacy Plolicy"
                  ></BaseCheckbox>
                </div>
                <div class="md:col-span-2 text-center">
                  <TheButton mode="brand" isShadow="true">Submit</TheButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </section>
  </Teleport>
</template>
