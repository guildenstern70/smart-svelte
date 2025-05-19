/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023-25 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

export interface Colors {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: Color[]
	support: Support
}

export interface Color {
	id: number
	name: string
	year: number
	color: string
	pantone_value: string
}

export interface Support {
	url: string
	text: string
}

