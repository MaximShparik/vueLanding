<template>
    <!-- Navbar start -->
		<nav class="w-screen fixed lg:px-20 flex z-50">
			<div style="display: flex;" class="actions">
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/orel.png" alt="" style="margin: 2px;">
					</a>
				</div>
				<div class="navItem">
					<a href="https://x.com/gubamisosal" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/x.png" alt="" style="padding: 9px; margin-left: 1px; margin-top: 1px;">
					</a>
				</div>
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/tgHeader.png" alt="" style="padding: 5px; margin-top: 1px;">
					</a>
				</div>
				<div class="navItem">
					<a href="https://rbankexchange.io/?from=usdt_trc20&to=sol_sol&lang=en" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/tablet.png" alt="" style="padding: 5px; margin-left: 2px;">
					</a>
				</div>
			</div>
			<div class="contractInfo">
				<div class="contract">
					H4PDo8ngWwC4quPTRWfTr2HorUQ2Ep4G3JVeJHMfkZAT
				</div>
				<div class="info" @click="copy('H4PDo8ngWwC4quPTRWfTr2HorUQ2Ep4G3JVeJHMfkZAT')">
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
		copy (value) {
      var inp =document.createElement('input')
      document.body.appendChild(inp)
      inp.value = value
      inp.select()
      document.execCommand('copy',false)
      inp.remove()
			document.querySelector('.copy').style.background = '#00ff00'
			setTimeout(() => {
				document.querySelector('.copy').style.background = '#90D990'
			}, 300);
    },
	}
}
</script>

<style scoped>
nav {
	justify-content: flex-end;
	max-width: 1600px;
	/* max-width: 100%; */
	width: 100%;
	padding: 0 20px;
	left: 50%;
	transform: translateX(-50%);
	padding-top: 30px;
}
.navItem {
	width: 50px;
	height: 50px;
	background: linear-gradient(#B7FA4D, #6D942E);
	border-radius: 50%;
	margin-right: 30px;
	cursor: pointer;
	border: 3px solid #D6FE25;
}
.navItem img {
	height: 40px;
}
.info {
	display: flex;
	flex-direction: row;
	background: linear-gradient(90deg, #B2E09C, #617A55);
	/* padding: 5px; */
	border-radius: 0px 0px 5px 5px;
	justify-content: space-between;
	cursor: pointer;
}
.info .text {
	margin: 0 auto;
	padding: 5px;
}
.copy {
	cursor: pointer;
	width: 90px;
	background: #90D990;
	padding: 5px;
}
.copy img {
	width: 20px;
	margin: 0 auto;
}
.contractInfo {
	/* border: 2px solid red; */
	border-radius: 20px;
}
.contract {
	background: linear-gradient(90deg, #969090, #4A4747);
	padding: 10px;
	border-radius: 5px 5px 0px 0px;
	color: white;
	word-break: break-all;
	border: 1px solid #E8DFDF;
	border-bottom: 1px solid black;
}
.text {
	color: black !important;
}

@media (max-width: 1200px) {
	nav {
		flex-direction: column-reverse;
		padding: 0;
	}
	.contractInfo {
		margin-bottom: 20px;
	}
	.actions {
		justify-content: space-around;
	}
	.navItem {
		margin: 0;
	}
}
</style>