<template>
    <div>
        <h3> Let's test API endpoint </h3>
        Here is the state of the API => {{ data }}
        <NuxtLink to="/" target="_blank">
            Go to Home Page
        </NuxtLink>
    </div>
  </template>
  
  <script setup>
    const {data, error} = await useFetch(`http://api:8080/`)
  </script>