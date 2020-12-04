const subtractLight = (color: any, amount: any) => {
	let cc = parseInt(color, 16) - amount
	let c = (cc < 0) ? 0 : (cc) as string | number
	c = (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`
	return c
}

const addLight = (color: any, amount: any) => {
	let cc = parseInt(color, 16) + amount
	let c = (cc > 255) ? 255 : (cc)
	c = (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`
	return c
}


// darken & lighten

export const darken = (color: string, amount: number) => {
	color = (color.indexOf('#') >= 0) ? color.substring(1, color.length) : color
	amount = parseInt(String((255 * amount) / 100))
	return color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`
}

export const lighten = (color: any, amount: any) => {
	color = (color.indexOf('#') >= 0) ? color.substring(1, color.length) : color
	amount = parseInt(String((255 * amount) / 100))
	return color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`
}
