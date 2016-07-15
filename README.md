# A-Frame MagicaVoxel Projects

Personal [MagicaVoxel](https://ephtracy.github.io/) projects rendered in
[A-Frame](https://aframe.io).

![city](img/city.png)

## Tutorial

1. Install MagicaVoxel.
2. Create a MagicaVoxel scene.
3. Export your MagicaVoxel project to OBJ.
4. Create A-Frame scene with `<a-obj-model>`.

```html
<a-scene>
  <a-assets>
    <a-asset-item id="my-obj" src="models/my.obj"></a-asset-item>
    <a-asset-item id="my-mtl" src="models/my.mtl"></a-asset-item>
    <audio autoplay loop src="audio/237329__fyono__night-city-atmosphere.wav"></audio>
  </a-assets>

  <!-- Model. -->
  <a-obj-model src="#my-obj" mtl="#my-mtl" position="0 -1 -5"></a-obj-model>
</a-scene>
```

## License

This program is free software and is distributed under an [MIT License](LICENSE).
