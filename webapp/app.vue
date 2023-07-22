<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
  const {data, error} = await useFetch(`http://api.ara-back.svc.cluster.local:8080/`)
</script>
