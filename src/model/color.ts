/*
 *
 *  SmartSvelte
 *  A web template project for Svelte
 *  Copyright (c) 2023 Alessio Saltarin
 *  MIT License - see LICENSE
 *
 */

export interface Color {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface Colors {
  colors: Array<Color>;
}
