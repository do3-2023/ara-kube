<template>
    <div>
        <h3> This is THE HOME PAGE </h3>
        {{ data }}
        <NuxtLink to="/healthz" target="_blank">
            Go to Health Check page
        </NuxtLink>
        <NuxtLink to="/adduser" target="_blank">
            Go to Add User form page
        </NuxtLink>
    </div>
</template>
  
<script setup>
const { data, error } = await useFetch(`http://api:8080/healthz`)
</script>