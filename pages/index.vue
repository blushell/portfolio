<template>
	<div class="h-screen flex flex-col overflow-hidden">
		<WindowTopBar />
		<div class="flex-1 bg-dracula-background flex flex-col overflow-hidden">
			<div class="flex-1 overflow-y-auto px-2 sm:px-4">
				<div class="max-w-screen-2xl mx-auto">
					<div class="mt-4 sm:mt-6">
						<AsciiLogo />
					</div>
					<Terminal />
				</div>
			</div>
			<TerminalFooter />
		</div>
	</div>
</template>

<!-- <script setup>
import AsciiLogo from '~/components/AsciiLogo.vue';
import Terminal from '~/components/Terminal.vue';
import TerminalFooter from '~/components/TerminalFooter.vue';
import WindowTopBar from '~/components/WindowTopBar.vue';
</script>
 -->
