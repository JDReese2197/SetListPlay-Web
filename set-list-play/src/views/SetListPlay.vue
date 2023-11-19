<template>
    <body>
        <main-stepper></main-stepper>
        <set-list-lookup></set-list-lookup>
    </body>
</template>

<script>
import MainStepper from '@/components/MainStepper.vue'
import SetListLookup from '@/components/SetListLookup.vue'

export default {
    components: { MainStepper, SetListLookup }
}
</script>