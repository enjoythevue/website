<template>
	<div class="panelists__container">
		<div 
			v-for="panelist in panelists"
			:key="panelist.name"
			class="panelists__person">
			<div class="panelists__person-img-container">
				<g-image 
					v-if="panelist.img"
					:src="panelist.img" 
					:alt="`Picture of ${panelist.name}`" />
				<div 
					v-else 
					class="panelists__person-img-fallback"/>
			</div>
			<a 
				:href="panelist.website"
				class="panelists__person-name"
			>{{ panelist.name }}</a>

			<div
				v-if="panelist.picks && panelist.picks.length"
				class="panelists__picks"
			>
				<ul>
					<li 
						v-for="(pick, index) in panelist.picks"
						:key="index"
						v-html="pick"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Panelists',
	props: {
		panelists: {
			type: Array,
			required: true,
			default: () => [],
		},
	},
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.panelists {
	
	&__container {
		display: flex;
		flex-wrap: wrap;
	}

	&__person {
		display: flex;
		align-items: center;
		flex-direction: column;
		position: relative;
		width: 50%;

		&:nth-child(1),
		&:nth-child(2) {
			margin-bottom: 2rem;
		}

		@media(min-width: 500px) {
			width: auto;
			&:not(:last-child) { margin-right: 1rem; }

			&:nth-child(1),
			&:nth-child(2) {
				margin-bottom: 0;
			}
		}
	}

	&__person-img-container {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 1rem;
		position: relative;

		img {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}

	&__person-img-fallback {
		background: $light-grey;
		height: 100%;
		width: 100%;
		margin-bottom: 1rem;
	}

	&__person-name {
		@include link-primary;
		cursor: pointer;
		font-size: $body-font-md;
		font-family: $font-secondary;

		&::after {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
		}
	}

	&__picks {
		font-size: $body-font-sm;

		ul {
			list-style-type: none;
			padding: 0;
		}

		li {
			font-family: $font-secondary;
			&::before {
				content: '-';
				margin-right: 4px;
			}
		}
	}
}
</style>
