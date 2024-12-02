<template>
    <!-- Navbar start -->
		<nav class="w-screen fixed p-4 lg:px-20 flex z-50">
			<div class="navItem">
				<img src="@/assets/orel.png" alt="">
			</div>
			<div class="navItem">
				<img src="@/assets/x.png" alt="" style="padding: 7px;">
			</div>
			<div class="navItem">
				<img src="@/assets/tg.png" alt="">
			</div>
			<div class="navItem">
				<img src="@/assets/tablet.png" alt="" style="padding: 5px;">
			</div>
			<div class="contractInfo">
				<div class="contract">
					H4PDo8ngWwC4quPTRWfTr2HorUQ2Ep4G3JVeJHMfkZAT
				</div>
				<div class="info">
					<div class="text">Contract address</div>
					<div class="copy"><img src="@/assets/copy.png" alt=""></div>
				</div>
			</div>
		</nav>
    <!-- Navbar end -->
</template>

<script>

export default {
    methods: {
		// Toogle navbar mode 
        navToggle() {
			let menu = document.querySelector("[role='menu']");
			let isExpanded = menu.getAttribute('aria-expanded');
			menu.setAttribute('aria-expanded', !isExpanded);
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		}
    }
}
</script>

<style scoped>
nav {
	justify-content: flex-end;
}
.navItem {
	width: 40px;
	height: 40px;
	background: #00fc00;
	border-radius: 50%;
	margin-right: 30px;
	margin-top: 25px;
	cursor: pointer;
}
.navItem img {
	height: 40px;
}
.info {
	display: flex;
	flex-direction: row;
	background: green;
	padding: 5px;
	border-radius: 0px 0px 17px 17px;
	justify-content: space-around;
}
.copy {
	cursor: pointer;
}
.copy img {
	width: 20px;
}
.contractInfo {
	/* border: 2px solid red; */
	border-radius: 20px;
}
.contract {
	background: grey;
	padding: 10px;
	border-radius: 17px 17px 0px 0px;
	color: white;
}
.text {
	color: black;
}
</style>