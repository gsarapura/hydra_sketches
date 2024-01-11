osc(60, 0.1, 1)
	// .thresh()
	.posterize(3, 0.8)
	.pixelate(20, 20)
	// .rotate(3, 1)
	.out()

// Circle
osc(40, 0.1, 1.2)
	//.thresh()
	.posterize(3, 0.8)
	.pixelate(20, 20)
	.kaleid(10) // change to other geometries
	.rotate(1, 1)
	.out()
