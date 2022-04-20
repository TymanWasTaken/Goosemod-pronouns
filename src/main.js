export default {
	gooseHandlers: {
		onImport: () => {
			console.log(goosemodScope)
		},
		onRemove: () => {
			// Will be ran when your module is uninstalled or disabled.
			// Clean up everything here.
		},
	},
};  