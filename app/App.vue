<template>
	<div id="app" class="container">
		<h1>{{title}}</h1>
		</br>
		</br>
		<div class="row">
			<div class="miniStyling col s6">
				<input autofocus autocomplete="off" v-model="query" placeholder="Lookin for food huh?" @keyup.enter="getFood">
			</div>
		</div>
		<div v-if="search">
			<v-collapsible collapse>
				<li v-for="result in foodResults">
					<v-collapsible-header class="colHead" v-on:click="getIng($event)" v-bind:id="result.number">
						{{result.name}}
					</v-collapsible-header>
					<v-collapsible-body class="colBody">
						<p style="padding:0.5rem; padding-left:2rem" v-for="(index, object) in ingResults">{{object}} : {{index}}</p>
					</v-collapsible-body>
				</li>
			</v-collapsible>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: 'Bring the foodies',
				query: '',
				foodResults: [],
				ingResults: [],
				search: false
			}
		},
		methods: {	
				getFood () {
				this.$http.post('/api', ['?query=' + encodeURIComponent(this.query)]).then((data) => {
					if (data.body.length === 0) {
						this.search = false;
					} else {
					this.foodResults = data.body;
					this.search = true;
					}
					}, (err) => {
					console.log(err)
					})
				},
				getIng (event) {
					this.ingResults = [];
					this.$http.post('/api', ['/'+ event.currentTarget.id]).then((data) => {
						this.ingResults = {
							kilokalorier: data.body.nutrientValues.energyKcal,
							fett: data.body.nutrientValues.fat,
							protein: data.body.nutrientValues.protein
						};
						this.search = true;				
					}, (err) => {
						console.log(err)
					})
				}
			}
		}
</script>

<style>
	#app {
		align-items: center;
		font-family: monospace;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	
	.miniStyling {
		padding-bottom: 20px;
	}
	
	.header {
		padding-top: 20px;
	}
	.colBody {
		background-color: #DDF2EB;
		font-size: 12px;
	}
</style>