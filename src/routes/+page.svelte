<script lang="ts">
	import type { NavigationLink, NavigationsListMap } from '../interfaces';
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import Contacts from '../components/Contacts.svelte';

	let navigationLinks: NavigationLink[] = [
		{ url: '#about', label: 'About' },
		{ url: '#projects', label: 'Projects' },
		{ url: '#contact', label: 'Contact' }
	];
	const aboutData = {
		bio: 'I am a student currently studying in Innopolis.',
		background: [
			'Software development and architecture',
			'Game development and computer graphics',
			'UX/UI design',
			'Cryptography',
			'Embedded and hardware development',
			'3D modeling and printing',
			'Backend development'
		],
		tools: [
			'Environment: Git, Docker, Docker-Compose, Github, GitLab, CI/CD, venv, poetry',
			'Editors: VS Code and Visual Studio',
			'Languages: Lua, Solidity, Python, Dart, C/C++, SQL, Kotlin, Java, GLSL, JS, TS, C#',
			'Tech stack: Flutter, Svelte, React, Qt, GTK, SFML, OpenGL, ESP IDE, NRF SDK, Arduino, Pyrogram, FastAPI, Web3, Solar SDK, Godot, Unity, Unreal Engine, 3DMax, Blender, EasyEDA, Cura',
			'System stack: Yandex Cloud, Firebase, Postgres, MongoDB, Kafka, RabbitMQ, Mosquitto, Linux/Windows'
		]
	};
	const projects: NavigationsListMap = {
		GitHub: [
			{
				label: 'Engine for particle simulations',
				url: 'https://github.com/Senopiece/gpu_particles'
			},
			{ label: 'Face Input Flutter plugin', url: 'https://github.com/Senopiece/face_input' },
			{
				label: 'Face-Controlled Video Player (uses the plugin above)',
				url: 'https://github.com/Senopiece/fcmp'
			},
			{ label: 'Automatic Irrigation on Arduino', url: 'https://github.com/Senopiece/watermelon' },
			{
				label: 'GUI client for the above project',
				url: 'https://github.com/Senopiece/watermelon_glasses'
			},
			{
				label: 'Accompaniment Generator for MIDI Music',
				url: 'https://github.com/Senopiece/aistat'
			},
			{
				label: 'A telegram userbot to collect statistical info about a chat',
				url: 'https://github.com/Senopiece/statisticus'
			},
			{ label: 'Time-Killer Game', url: 'https://github.com/Senopiece/SaveTheBall' },
			{ label: 'App with Chuck Norris Jokes lol', url: 'https://github.com/Senopiece/cnj' },
			{ label: 'CV Parser', url: 'https://github.com/InnoSWP/cvparser_b21_01' },
			{ label: 'Path Annealing Visualizer', url: 'https://github.com/Senopiece/annealed_path' },
			{
				label:
					'Additional private and commercial projects are not listed here due to their restricted access or lack of public repository.',
				url: ''
			}
		],
		GitLab: [
			{
				label:
					"I'm sorry, but since my GitLab account is mainly used for work purposes, all the content on it is private.",
				url: ''
			}
		]
	};
</script>

<title>My portfolio page</title>
<nav>
	<ul>
		{#each navigationLinks as link}
			<li>
				<a href={link.url}>{link.label}</a>
			</li>
		{/each}
	</ul>
</nav>
<main>
	<section id="about"><About {aboutData} /></section>
	<section id="projects"><Projects {projects} /></section>
	<section id="contact"><Contacts /></section>
</main>
