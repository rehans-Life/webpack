export default function showDate() {
  console.log(moment(new Date()).format("DD/MM/yyyy"));
}

export function treeShakable() {
  console.log("This should be tree shaked");
}
