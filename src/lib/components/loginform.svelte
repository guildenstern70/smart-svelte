<!--
-
-  SmartSvelte
-  A web template project for Svelte
-  Copyright (c) 2023-25 Alessio Saltarin
-  MIT License - see LICENSE
-
-->


<script lang="ts">
	const loginAsGuest = () => {
		const username = 'guest';
		const password = 'guest';
		const form = document.createElement('form');
		form.method = 'POST';
		form.action = '/login';
		const usernameField = document.createElement('input');
		usernameField.type = 'hidden';
		usernameField.name = 'username';
		usernameField.value = username;
		const passwordField = document.createElement('input');
		passwordField.type = 'hidden';
		passwordField.name = 'password';
		passwordField.value = password;
		form.appendChild(usernameField);
		form.appendChild(passwordField);
		document.body.appendChild(form);
		form.submit();
	}
</script>

<section>
	<div class="flex flex-col items-center justify-center px-6 py-6 mx-auto lg:mt-8">
		<a
			href="https://svelte.dev/"
			target="_blank"
			rel="noreferrer"
			class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
				class="w-8 h-8 mr-2"
				alt="Svelte Logo"
			/>
			SmartSvelte
		</a>
		<div
			class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
		>
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
				>
					Sign in to your account
				</h1>
				<form class="space-y-4 md:space-y-6" method="POST" action="/login">
					<div>
						<label
							for="username"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label
						>
						<input
							type="text"
							name="username"
							id="username"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Your username"
							required
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label
						>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div class="flex items-center justify-between">
						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
							</div>
						</div>
						<a
							href="/more"
							class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
							>Skip</a
						>
					</div>
					<button
						type="submit"
						class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Sign in</button
					>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Don't remember your username?
						<button
							type="button"
							class="text-primary-600 hover:underline"
							on:click={() => loginAsGuest()}>Login as guest</button
						>
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
