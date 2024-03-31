<template>
	<div>
		{{ data }}
	</div>
</template>

<script lang="ts" setup>
const { data } = storeToRefs(useData());
</script>

<style></style>
