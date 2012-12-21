var priceDeltaColors = [
  "#ff0000", "#dd0000", "#bb0000", "#990000", "#770000", "#550000", "#330000", "#110000",
  "#001100", "#003300", "#005500", "#007700", "#009900", "#00bb00", "#00dd00", "#00ff00"
];
var QuantDesk = {
  app: {}
};
QuantDesk.app.color = function() {
  return d3.scale.ordinal().range(priceDeltaColors);
};
