// ensure DOM loaded before attaching event handlers
document.addEventListener('DOMContentLoaded', (event) => {
	// UPDATE
	const changeDevouredBtns = document.querySelectorAll('.change-devoured');

	// Set up the event listener for the create button
	if (changeDevouredBtns) {
		changeDevouredBtns.forEach((button) => {
			button.addEventListener('click', (e) => {
				const id = e.target.getAttribute('data-id');

				const newDevouredState = {
					devoured: true,
				};

				fetch(`/api/burgers/${id}`, {
					method: 'PUT',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},

					body: JSON.stringify(newDevouredState),
				}).then((response) => {
					if (response.ok) {
						location.reload('/');
					} else {
						alert('Houston we got a problem!');
					}
				});
			});
		});
	}

	// CREATE
	const createBurgerBtn = document.getElementById('create-form');

	if (createBurgerBtn) {
		createBurgerBtn.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('submitted!');

			const newBurger = {
				burger_name: document.getElementById('burger').value.trim(),
				devoured: false,
			};

			fetch('/api/burgers', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(newBurger),
			}).then(() => {
				document.getElementById('burger').value = '';
				location.reload();
			});
		});
	}
});
