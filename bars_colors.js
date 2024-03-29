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

// Sin señal - Bándalos Chinos
noise()
	.color(2, 3, 33, 0.2)
	.posterize(2 , 0.5 )
	.pixelate(20, 1)
	.invert([0,1])
	.kaleid(6)
	.rotate(1, 0.1)
	.out()
noise(5, 0.1)
	.color(2, 3, 33, 0.2)
	.posterize(6, 0.5)
	.pixelate(20, 1)
	.invert([0, 1])
	.kaleid(3)
	.rotate(2, 1)
	.out()
