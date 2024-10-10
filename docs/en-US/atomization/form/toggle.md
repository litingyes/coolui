# Toggle

## Size

```html preview
<fieldset class="border-none flex items-center gap-4">
  <div class="flex items-center gap-1">
    <input toggle="~ sm" type="checkbox" id="size-sm" />
    <label for="size-sm">sm</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ md" type="checkbox" id="size-md" />
    <label for="size-md">md</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ lg" type="checkbox" id="size-lg" />
    <label for="size-lg">lg</label>
  </div>
</fieldset>
```

## Readonly

```html preview
<fieldset class="border-none flex items-center gap-4 form-readonly">
  <div class="flex items-center gap-1">
    <input toggle="~ sm" type="checkbox" id="size-sm" />
    <label for="size-sm">sm</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ md" type="checkbox" id="size-md" />
    <label for="size-md">md</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ lg" type="checkbox" id="size-lg" />
    <label for="size-lg">lg</label>
  </div>
</fieldset>
```

## Disabled

```html preview
<fieldset class="border-none flex items-center gap-4 form-disabled">
  <div class="flex items-center gap-1">
    <input toggle="~ sm" type="checkbox" id="size-sm" />
    <label for="size-sm">sm</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ md" type="checkbox" id="size-md" />
    <label for="size-md">md</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ lg" type="checkbox" id="size-lg" />
    <label for="size-lg">lg</label>
  </div>
</fieldset>
```

## Colors

```html preview
<fieldset class="border-none flex items-center gap-4">
  <div class="flex items-center gap-1">
    <input toggle="~ sm red" type="checkbox" id="size-sm" />
    <label for="size-sm">sm</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ md yellow" type="checkbox" id="size-md" />
    <label for="size-md">md</label>
  </div>
  <div class="flex items-center gap-1">
    <input toggle="~ lg green" type="checkbox" id="size-lg" />
    <label for="size-lg">lg</label>
  </div>
</fieldset>
```

## Compose

```html preview
<div class="flex items-center gap-1">
  <input
    toggle="~ md "
    type="checkbox"
    class="bg-cool-100 before:(i-material-symbols-light:light-mode bg-red) checked:(bg-cool-100) checked:before:(i-material-symbols-light:dark-mode bg-green)"
    id="size-md"
  />
  <label for="size-md">with icon</label>
</div>
```
