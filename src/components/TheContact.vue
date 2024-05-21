<script>
import TheDialog from '@/components/UI/TheDialog.vue';
import TheInput from '@/components/UI/TheInput.vue';
export default {
    components: {
        TheDialog,
        TheInput
    },
    data() {
        return {
            contact: {
                name: '',
                surname: '',
                phone: '',
                email: ''
            }
        }
    }
}
</script>

<template>
    <TheDialog>
        <h2 class="text-3xl text-headline font-semibold text-center xl:text-4xl/[3rem]  mb-8 xl:mb-10 ">Contact Information</h2>
        <form class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
            @submit.prevent="">
            <div>
                <TheInput v-model="contact.name" label="First Name" type="text"></TheInput>
            </div>
           <div>
                <TheInput v-model="contact.surname" label="Last Name" type="text"></TheInput>
            </div>
            <div>
                <TheInput v-model="contact.phone" label="Mobile Phone" type="tel"></TheInput>
            </div>
            <div>
                <TheInput v-model="contact.email" label="E-mail" type="email"></TheInput>
            </div>
             <div class="md:col-span-2 text-center">
                <TheButton mode="brand" isShadow="true">Submit</TheButton>
            </div>
        </form>
    </TheDialog>
</template>