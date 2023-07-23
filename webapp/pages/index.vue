<template>
    <div>
        <h3> This is THE HOME PAGE </h3>
        {{ data }}
        <NuxtLink to="/healthz" target="_blank">
            Go to Health Check page
        </NuxtLink>
    </div>
</template>
  
<script setup>
const { data, error } = await useFetch(`http://api.ara-back:8080/healthz`)
</script>