import React from "react";

export default function Navbar() {
	return (
		<div>
			<nav
				class="navbar sticky-top navbar-light"
				style="background-color: #dd145a"
			>
				<div class="container-fluid">
					<a class="navbar-brand text-white" href="/index.html">
						Katya Rozhko
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div class="navbar-nav">
							<a
								class="nav-link active text-white"
								aria-current="page"
								href="index.html"
							>
								Home
							</a>
							<a class="nav-link text-white" href="about.html">
								Bio
							</a>
							<a class="nav-link text-white" href="contact.html">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
