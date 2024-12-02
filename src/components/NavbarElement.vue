<template>
    <!-- Navbar start -->
		<nav class="w-screen fixed p-4 lg:px-20 flex z-50">
			<div style="display: flex;">
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/orel.png" alt="">
					</a>
				</div>
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/x.png" alt="" style="padding: 7px;">
					</a>
				</div>
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/tg.png" alt="">
					</a>
				</div>
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/tablet.png" alt="" style="padding: 5px;">
					</a>
				</div>
			</div>
			<div class="contractInfo">
				<div class="contract">
					H4PDo8ngWwC4quPTRWfTr2HorUQ2Ep4G3JVeJHMfkZAT
				</div>
				<div class="info">
					<div class="text">Contract address</div>
					<div class="copy" @click="copy('H4PDo8ngWwC4quPTRWfTr2HorUQ2Ep4G3JVeJHMfkZAT')"><img src="@/assets/copy.png" alt=""></div>
				</div>
			</div>
		</nav>
    <!-- Navbar end -->
</template>

<script>

export default {
	methods: {
		copy (value) {
      var inp =document.createElement('input')
      document.body.appendChild(inp)
      inp.value = value
      inp.select()
      document.execCommand('copy',false)
      inp.remove()
    },
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
	background: #a2f7a2;
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
	background: #008000c7;
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
	background: #030402ad;
	padding: 10px;
	border-radius: 17px 17px 0px 0px;
	color: white;
	word-break: break-all;
}
.text {
	color: black;
}

@media (max-width: 1200px) {
	nav {
		flex-direction: column-reverse;
	}
}
</style>