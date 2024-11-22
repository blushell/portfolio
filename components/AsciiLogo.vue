<template>
	<div class="flex flex-col sm:flex-row items-center">
		<pre
			style="font-family: monospace"
			class="text-dracula-purple text-dracula-comment leading-none text-[0.5rem] sm:text-lg sm:leading-none"
			>{{ asciiLogo }}</pre
		>
	</div>
	<!-- 	<pre
		style="font-family: monospace"
		class="text-dracula-base-types text-lg leading-none"
		>{{ asciiLogo }}</pre
	> -->
</template>
<script setup>
const asciiLogo = `
     ██╗ ██████╗ ███╗   ██╗███████╗███████╗██╗   ██╗    ██████╗ ███████╗██╗   ██╗
     ██║██╔═══██╗████╗  ██║██╔════╝██╔════╝╚██╗ ██╔╝    ██╔══██╗██╔════╝██║   ██║
     ██║██║   ██║██╔██╗ ██║█████╗  ███████╗ ╚████╔╝     ██║  ██║█████╗  ██║   ██║
██   ██║██║   ██║██║╚██╗██║██╔══╝  ╚════██║  ╚██╔╝      ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚█████╔╝╚██████╔╝██║ ╚████║███████╗███████║   ██║       ██████╔╝███████╗ ╚████╔╝ 
 ╚════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝   ╚═╝       ╚═════╝ ╚══════╝  ╚═══╝
`;
</script>

<style scoped>
pre {
	/* Prevent selection of ASCII art */
	user-select: none;
	/* Ensure consistent rendering */
	-webkit-font-smoothing: none;
	-moz-osx-font-smoothing: grayscale;
}
</style>
