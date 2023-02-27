<script lang="ts" setup>
// import { ref } from 'vue';

const prop = defineProps({
  modelValue: String,
});
</script>

<template>
  <div>
    <q-date :model-value="prop.modelValue" />
    <!-- v-on:update:model-value="$emit('update:modelVaue', $event.target.value)" -->
  </div>
</template>
