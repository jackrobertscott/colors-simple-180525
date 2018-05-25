# colors-simple

> Simple, attractive color scales

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Easy to use color scales. Great for use in string templates such as in [styled-components](https://www.styled-components.com/). Inspired by [HTML Color Codes](https://htmlcolorcodes.com/).

## Install

Get started by installing colors-simple.

```sh
npm install --save colors-simple
```

## Usage

Import the colors and start using with no setup required.

```js
import styled from 'styled-components';
import colors from 'colors-simple';

export const Example = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${colors.GREEN_SEA5}
`;
```

## Colors

| Name | Example | Hex |
|------|---------|-----|
| TURQUOISE | `TURQUOISE0` | **#1abc9c** |
| GREEN_SEA | `GREEN_SEA0` | **#16a085** |
| EMERALD | `EMERALD0` | **#2ecc71** |
| NEPHRITIS | `NEPHRITIS0` | **#27ae60** |
| PETER_RIVER | `PETER_RIVER0` | **#3498db** |
| BELIZE_HOLE | `BELIZE_HOLE0` | **#2980b9** |
| AMETHYST | `AMETHYST0` | **#9b59b6** |
| WISTERIA | `WISTERIA0` | **#8e44ad** |
| WET_ASPHALT | `WET_ASPHALT0` | **#34495e** |
| MIDNIGHT_BLUE | `MIDNIGHT_BLUE0` | **#2c3e50** |
| SUNFLOWER | `SUNFLOWER0` | **#f1c40f** |
| ORANGE | `ORANGE0` | **#f39c12** |
| CARROT | `CARROT0` | **#e67e22** |
| PUMPKIN | `PUMPKIN0` | **#d35400** |
| ALIZARIN | `ALIZARIN0` | **#e74c3c** |
| POMEGRANATE | `POMEGRANATE0` | **#c0392b** |
| CLOUDS | `CLOUDS0` | **#ecf0f1** |
| SILVER | `SILVER0` | **#bdc3c7** |
| CONCRETE | `CONCRETE0` | **#95a5a6** |
| ASBESTOS | `ASBESTOS0` | **#7f8c8d** |

## JSON

```json
{
  "TURQUOISE0": "#00462f",
  "TURQUOISE1": "#066047",
  "TURQUOISE2": "#0c7a5f",
  "TURQUOISE3": "#119578",
  "TURQUOISE4": "#17af90",
  "TURQUOISE5": "#2bc3a7",
  "TURQUOISE6": "#4ed2bd",
  "TURQUOISE7": "#70e1d3",
  "TURQUOISE8": "#93f0e9",
  "TURQUOISE9": "#b5ffff",
  "GREEN_SEA0": "#002f1d",
  "GREEN_SEA1": "#054834",
  "GREEN_SEA2": "#0a614b",
  "GREEN_SEA3": "#0f7a62",
  "GREEN_SEA4": "#149379",
  "GREEN_SEA5": "#26ab93",
  "GREEN_SEA6": "#47c0ae",
  "GREEN_SEA7": "#68d5c9",
  "GREEN_SEA8": "#89eae4",
  "GREEN_SEA9": "#aaffff",
  "EMERALD0": "#005300",
  "EMERALD1": "#0a6e19",
  "EMERALD2": "#148932",
  "EMERALD3": "#1fa44b",
  "EMERALD4": "#29bf64",
  "EMERALD5": "#3ed27f",
  "EMERALD6": "#5fdd9a",
  "EMERALD7": "#80e8b5",
  "EMERALD8": "#a0f4d1",
  "EMERALD9": "#c1ffec",
  "NEPHRITIS0": "#003900",
  "NEPHRITIS1": "#095315",
  "NEPHRITIS2": "#116d2b",
  "NEPHRITIS3": "#1a8740",
  "NEPHRITIS4": "#23a155",
  "NEPHRITIS5": "#37b76d",
  "NEPHRITIS6": "#56c988",
  "NEPHRITIS7": "#75dba3",
  "NEPHRITIS8": "#95edbe",
  "NEPHRITIS9": "#b4ffd8",
  "PETER_RIVER0": "#002d63",
  "PETER_RIVER1": "#0c447d",
  "PETER_RIVER2": "#175c98",
  "PETER_RIVER3": "#2374b3",
  "PETER_RIVER4": "#2e8cce",
  "PETER_RIVER5": "#44a3df",
  "PETER_RIVER6": "#65bae7",
  "PETER_RIVER7": "#85d1ef",
  "PETER_RIVER8": "#a5e8f7",
  "PETER_RIVER9": "#c6ffff",
  "BELIZE_HOLE0": "#001a46",
  "BELIZE_HOLE1": "#09315f",
  "BELIZE_HOLE2": "#124779",
  "BELIZE_HOLE3": "#1b5e93",
  "BELIZE_HOLE4": "#2475ac",
  "BELIZE_HOLE5": "#398ec1",
  "BELIZE_HOLE6": "#58a9d0",
  "BELIZE_HOLE7": "#77c4e0",
  "BELIZE_HOLE8": "#96dfef",
  "BELIZE_HOLE9": "#b6fbff",
  "AMETHYST0": "#260043",
  "AMETHYST1": "#40145c",
  "AMETHYST2": "#5a2876",
  "AMETHYST3": "#743b90",
  "AMETHYST4": "#8e4fa9",
  "AMETHYST5": "#a666be",
  "AMETHYST6": "#bc81ce",
  "AMETHYST7": "#d39cdf",
  "AMETHYST8": "#e9b7ef",
  "AMETHYST9": "#ffd2ff",
  "WISTERIA0": "#20003b",
  "WISTERIA1": "#380f54",
  "WISTERIA2": "#511e6e",
  "WISTERIA3": "#692d87",
  "WISTERIA4": "#823ca0",
  "WISTERIA5": "#9b51b6",
  "WISTERIA6": "#b46cc8",
  "WISTERIA7": "#cd87db",
  "WISTERIA8": "#e6a2ed",
  "WISTERIA9": "#ffbcff",
  "WET_ASPHALT0": "#000000",
  "WET_ASPHALT1": "#0c1015",
  "WET_ASPHALT2": "#17202a",
  "WET_ASPHALT3": "#23313f",
  "WET_ASPHALT4": "#2e4154",
  "WET_ASPHALT5": "#41566b",
  "WET_ASPHALT6": "#5a6f85",
  "WET_ASPHALT7": "#7389a0",
  "WET_ASPHALT8": "#8da2ba",
  "WET_ASPHALT9": "#a6bbd4",
  "MIDNIGHT_BLUE0": "#000000",
  "MIDNIGHT_BLUE1": "#0a0e12",
  "MIDNIGHT_BLUE2": "#141c24",
  "MIDNIGHT_BLUE3": "#1d2935",
  "MIDNIGHT_BLUE4": "#273747",
  "MIDNIGHT_BLUE5": "#384a5d",
  "MIDNIGHT_BLUE6": "#516377",
  "MIDNIGHT_BLUE7": "#6a7c90",
  "MIDNIGHT_BLUE8": "#8395aa",
  "MIDNIGHT_BLUE9": "#9caec4",
  "SUNFLOWER0": "#6d5100",
  "SUNFLOWER1": "#8a6b03",
  "SUNFLOWER2": "#a78407",
  "SUNFLOWER3": "#c59e0a",
  "SUNFLOWER4": "#e2b70d",
  "SUNFLOWER5": "#f3cb1f",
  "SUNFLOWER6": "#f6d840",
  "SUNFLOWER7": "#f9e560",
  "SUNFLOWER8": "#fcf281",
  "SUNFLOWER9": "#ffffa1",
  "ORANGE0": "#6d2d00",
  "ORANGE1": "#8b4604",
  "ORANGE2": "#a85e08",
  "ORANGE3": "#c6770c",
  "ORANGE4": "#e49010",
  "ORANGE5": "#f4a721",
  "ORANGE6": "#f7bd3f",
  "ORANGE7": "#fad35d",
  "ORANGE8": "#fce97b",
  "ORANGE9": "#ffff99",
  "CARROT0": "#610a00",
  "CARROT1": "#7f2308",
  "CARROT2": "#9c3d0f",
  "CARROT3": "#ba5717",
  "CARROT4": "#d7711e",
  "CARROT5": "#e98c2f",
  "CARROT6": "#eea74a",
  "CARROT7": "#f4c365",
  "CARROT8": "#f9df80",
  "CARROT9": "#fffa9b",
  "PUMPKIN0": "#510000",
  "PUMPKIN1": "#6e1300",
  "PUMPKIN2": "#8b2500",
  "PUMPKIN3": "#a83800",
  "PUMPKIN4": "#c54b00",
  "PUMPKIN5": "#d8620e",
  "PUMPKIN6": "#e27d2b",
  "PUMPKIN7": "#eb9847",
  "PUMPKIN8": "#f5b463",
  "PUMPKIN9": "#ffcf80",
  "ALIZARIN0": "#5e0000",
  "ALIZARIN1": "#7c110d",
  "ALIZARIN2": "#9b221b",
  "ALIZARIN3": "#b93328",
  "ALIZARIN4": "#d84435",
  "ALIZARIN5": "#ea5a49",
  "ALIZARIN6": "#ef7762",
  "ALIZARIN7": "#f4937b",
  "ALIZARIN8": "#faaf95",
  "ALIZARIN9": "#ffccae",
  "POMEGRANATE0": "#440000",
  "POMEGRANATE1": "#5f0d0a",
  "POMEGRANATE2": "#7b1913",
  "POMEGRANATE3": "#97261d",
  "POMEGRANATE4": "#b23326",
  "POMEGRANATE5": "#c74737",
  "POMEGRANATE6": "#d56350",
  "POMEGRANATE7": "#e37e69",
  "POMEGRANATE8": "#f19a81",
  "POMEGRANATE9": "#ffb69a",
  "CLOUDS0": "#737677",
  "CLOUDS1": "#8e9192",
  "CLOUDS2": "#a9acad",
  "CLOUDS3": "#c4c7c8",
  "CLOUDS4": "#dfe2e3",
  "CLOUDS5": "#eef2f3",
  "CLOUDS6": "#f2f5f6",
  "CLOUDS7": "#f7f8f9",
  "CLOUDS8": "#fbfcfc",
  "CLOUDS9": "#ffffff",
  "SILVER0": "#4a4f53",
  "SILVER1": "#64696d",
  "SILVER2": "#7d8386",
  "SILVER3": "#979ca0",
  "SILVER4": "#b0b6ba",
  "SILVER5": "#c4cacd",
  "SILVER6": "#d3d7da",
  "SILVER7": "#e2e4e6",
  "SILVER8": "#f0f2f3",
  "SILVER9": "#ffffff",
  "CONCRETE0": "#283637",
  "CONCRETE1": "#414f50",
  "CONCRETE2": "#596768",
  "CONCRETE3": "#718081",
  "CONCRETE4": "#89999a",
  "CONCRETE5": "#a1afb0",
  "CONCRETE6": "#b8c3c4",
  "CONCRETE7": "#d0d7d7",
  "CONCRETE8": "#e7ebeb",
  "CONCRETE9": "#ffffff",
  "ASBESTOS0": "#172223",
  "ASBESTOS1": "#2e3a3a",
  "ASBESTOS2": "#455152",
  "ASBESTOS3": "#5c696a",
  "ASBESTOS4": "#738081",
  "ASBESTOS5": "#8d999a",
  "ASBESTOS6": "#a8b2b3",
  "ASBESTOS7": "#c3cccc",
  "ASBESTOS8": "#dfe5e6",
  "ASBESTOS9": "#faffff"
}
```

## Maintainers

- [Jack Scott](https://github.com/jackrobertscott)

## License

MIT
