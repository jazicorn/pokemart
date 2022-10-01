# DiceBear
> DiceBear is an avatar library for designers and developers.

- [Github](https://github.com/dicebear/dicebear)
- [Documentation](https://avatars.dicebear.com/docs/installation)

## Instructions
```bash
# install
npm install --save @dicebear/avatars

# install only one style
npm install --save @dicebear/avatars-male-sprites
```
```javascript
// add to project
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';

let svg = createAvatar(style, {
  seed: 'custom-seed',
  // ... and other options
});
// You can also omit seed to create a completely random avatar.
```

### HTTP-API
Our free HTTP-API is the easiest way to use Avatars. Just use the following URL as image source.
```http
https://avatars.dicebear.com/docs/http-api
```
*Replace :sprites with male, female, human, identicon, initials, bottts, avataaars, jdenticon, gridy or micah. 
The value of :seed can be anything you like - but don't use any sensitive or personal data here!*

## [Styles](https://avatars.dicebear.com/styles)

**[Artist Licenses](https://avatars.dicebear.com/licenses)**
> While our code is MIT licensed, the designs are licensed under different licenses that the designers can choose themselves. 
> Some licenses require attribution. You must respect both licenses if you want to use avatars from DiceBear.

### [Pixel Art](https://avatars.dicebear.com/styles/pixel-art)
- [Instructions](https://avatars.dicebear.com/styles/pixel-art)

**HTTP-API Method**
```http
https://avatars.dicebear.com/api/pixel-art/:seed.svg
```

**NPM Method**
```bash
npm install --save @dicebear/avatars @dicebear/pixel-art
```
```javascript
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/pixel-art';

let svg = createAvatar(style, {
  seed: 'custom-seed',
  // ... and other options
});
```
