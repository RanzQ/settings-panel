# settings-panel [![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Simple settings panel for your app, demo or tests.

[![settings-panel](https://raw.githubusercontent.com/dfcreative/settings-panel/master/preview.png "settings-panel")](http://requirebin.com/?gist=21fc39f7f206ca50a4d5cd7298f8b9f8)

## Usage

[![npm install settings-panel](https://nodei.co/npm/settings-panel.png?mini=true)](https://npmjs.org/package/settings-panel/)

```javascript
var createPanel = require('settings-panel')

var panel = createPanel([
  {type: 'range', label: 'my range', min: 0, max: 100, value: 20},
  {type: 'range', label: 'log range', min: 0.1, max: 100, value: 20, scale: 'log'},
  {type: 'text', label: 'my text', value: 'my cool setting', help: 'why this is cool'},
  {type: 'checkbox', label: 'my checkbox', value: true},
  {type: 'color', label: 'my color', format: 'rgb', value: 'rgb(10,200,0)', change: value => console.log(value)},
  {type: 'button', label: 'gimme an alert', change: () => alert('hello!')},
  {type: 'select', label: 'select one', options: ['option 1', 'option 2'], value: 'option 1'}
],
  {
    title: 'Settings'
  }
);
```

## API

### panel = Panel([field1, field2, ...], options?)

The first argument is a list of fields. Each one may have following properties:

* `type` one of `range` • `interval` • `checkbox` • `color` • `select` • `switch` • `custom` • `textarea` • `text` or any `<input>` type.
* `label` used as id and a label for input, must be unique.
* `value` for initial value.
* `orientation` defines position of a label relative to the input, one of `top`, `left`, `right`, `bottom`. Redefines `options.orientation`.
* `style` appends additinal style to the field, can be an object or a css string.
* `hidden` defines whether field should be visually hidden, but present as a value.
* `input` callback, invoked if value changed.
* `init` invoked once component is set up.
* `change` invoked each time field value changed, whether through `input` or API.

For example,

```javascript
{type: 'checkbox', name: 'My Checkbox', value: true, input: value => {}}
```

Some types have additional properties:

- `range` can specify a `min`, `max`, and `step` (or integer `steps`). Scale can be either `'linear'` (default) or `'log'`. If a log scale, the sign of `min`, `max`, and `value` must be the same and only `steps` is permitted (since the step size is not constant on a log scale).
- `interval` obeys the same semantics as `range` inputs, except the input and ouput is a two-element array corresponding to the low/high bounds, e.g. `value: [1, 7.5]`.
- `color` can specify a `format` as either `rgb` • `hex` • `array`
- `select` and `switch` can specify `options`, either as an `Array` (in which case the value is the same as the option text) or as an object containing key/value pairs (in which case the key/value pair maps to value value/label pairs).
- `text` and `textarea` can specify `placeholder`.
- `custom` can define `create` method, returning HTML string, element or documentFragment.

#### options

- `container` element to which to append the panel
- `title` a title to add to the top of the panel
- `orientation` specifies label position relative to input: `top` • `left` • `bottom` • `right`
- `css` inserts dynamic style for the panel instance, can be a css string or a function returning string. Useful to implement dynamic theme.
- `className` appends additional className to the panel element.

### panel.on('input', cb(name, value, data))

Emitted every time any one of the inputs change. The callback argument `data` will contain the state of all inputs keyed by label such as:

```javascript
{'my checkbox': false, 'my range': 75}
```

### panel.get(name?)

Get the value of a field defined by `name`. Or get full list of values, if `name` is undefined.

### panel.set(name, value|options)

Update specific field, with value or field options. You can also pass an object or array to update multiple fields:

```js
panel.set({ 'my range': { min: -100, value: 200}, 'my color': '#fff' });
```

### panel.update(opts)

Rerender panel with new options.


## See also

* [prama](https://github.com/dfcreative/prama) — wrapper for settings-panel, providing themes, popup, button, state management etc.
* [control-panel](https://github.com/freeman-lab/control-panel) — original forked settings panel.
* [dat.gui](https://github.com/dataarts/dat.gui) — other oldschool settings panel.