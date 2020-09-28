// Created with Motiva Layama v1.18b https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama0001", p: new BABYLON.Vector3(1650, 140, 810), l: new BABYLON.Vector3(1651, 140, 810)});
   layamaCameras.push({n: "Layama0008", p: new BABYLON.Vector3(1800, 140, 830), l: new BABYLON.Vector3(1801, 140, 830)});
   layamaCameras.push({n: "Layama0015", p: new BABYLON.Vector3(1650, 140, 930), l: new BABYLON.Vector3(1651, 140, 930)});
   layamaCameras.push({n: "Layama0022", p: new BABYLON.Vector3(1650, 140, 1060), l: new BABYLON.Vector3(1651, 140, 1060)});
   layamaCameras.push({n: "Layama0029", p: new BABYLON.Vector3(1840, 140, 950), l: new BABYLON.Vector3(1841, 140, 950)});
   layamaCameras.push({n: "Layama0036", p: new BABYLON.Vector3(2010, 140, 950), l: new BABYLON.Vector3(2011, 140, 950)});
   layamaCameras.push({n: "Layama0043", p: new BABYLON.Vector3(1830, 140, 1100), l: new BABYLON.Vector3(1831, 140, 1100)});
   layamaCameras.push({n: "Layama0050", p: new BABYLON.Vector3(1800, 140, 1260), l: new BABYLON.Vector3(1801, 140, 1260)});
   layamaCameras.push({n: "Layama0057", p: new BABYLON.Vector3(1890, 140, 1270), l: new BABYLON.Vector3(1891, 140, 1270)});
   layamaCameras.push({n: "Layama0064", p: new BABYLON.Vector3(2030, 140, 1270), l: new BABYLON.Vector3(2031, 140, 1270)});
   layamaCameras.push({n: "Layama0071", p: new BABYLON.Vector3(1890, 140, 1450), l: new BABYLON.Vector3(1890.64, 140, 1449.23)});
   layamaCameras.push({n: "Layama0078", p: new BABYLON.Vector3(2030, 140, 1450), l: new BABYLON.Vector3(2030, 140, 1449)});
   layamaCameras.push({n: "Layama0085", p: new BABYLON.Vector3(1700, 140, 1210), l: new BABYLON.Vector3(1700, 140, 1209)});
   layamaCameras.push({n: "Layama0092", p: new BABYLON.Vector3(1790, 140, 1390), l: new BABYLON.Vector3(1791, 140, 1390)});
   layamaCameras.push({n: "Layama0099", p: new BABYLON.Vector3(1650, 140, 1390), l: new BABYLON.Vector3(1651, 140, 1390)});
   layamaCameras.push({n: "Layama0106", p: new BABYLON.Vector3(1790, 140, 1600), l: new BABYLON.Vector3(1789.5, 140, 1599.13)});
   layamaCameras.push({n: "Layama0113", p: new BABYLON.Vector3(1650, 140, 1600), l: new BABYLON.Vector3(1650, 140, 1599)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 0, altMove: true, altRot: 1};
}

