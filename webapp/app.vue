<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
  const {data, error} = await useFetch('http://api:8080/')
</script>
